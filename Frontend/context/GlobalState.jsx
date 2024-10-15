import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import AthletesContext from "./AthletesContext";
import { GET_ATHLETES, GET_ATHLETE } from "./Types";
import axios from "axios";

const HOST = "http://localhost:3005/api";

const GlobalState = (props) => {
  
    let initialState = {
    athletes: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAthletes = async () => {
    try {
      let res = await axios.get(HOST + "/");
      let { data } = res;
      dispatch({ type: GET_ATHLETES, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  
  const getAthlete = async (id) => {
    try {
      let res = await axios.get(HOST + "/" + id);
      dispatch({ type: GET_ATHLETE, payload: res.data });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  const postAthlete = async (newAthlete) => {
    try {
      const res = await axios.post(HOST + "/", newAthlete);
      dispatch({ type: "ADD_ATHLETE", payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  const putAthlete = async (id, updatedAthlete) => {
    try {
      const res = await axios.put(HOST + "/" + id, updatedAthlete);
      dispatch({ type: "UPDATE_ATHLETE", payload: res.data });
    } catch {
      console.error(error);
    }
  };
  
  const deleteAthlete = async (id) => {
    try {
      const res = await axios.delete(HOST + "/" + id);
      dispatch({ type: "DELETE_ATHLETE", payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AthletesContext.Provider
      value={{
        athletes: state.athletes,
        getAthletes,
        getAthlete,
        postAthlete,
        putAthlete,
        deleteAthlete,
      }}
    >
      {props.children}
    </AthletesContext.Provider>
  )

};

export default GlobalState;


