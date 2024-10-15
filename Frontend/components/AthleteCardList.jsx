import React, { useContext, useEffect } from "react";
import AthleteCard from "./AthleteCard";
import athletesContext from "../context/AthletesContext";

const AthleteCardList = () => {
  const AthleteContext = useContext(athletesContext);
  useEffect(() => {
    AthleteContext.getAthletes();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mb-4 mt-4">
          {AthleteContext.athletes.length
            ? AthleteContext.athletes.map((athlete) => (
                <div className="col-md-4 mb-4" key={athlete.id}>
                  <AthleteCard key={athlete.id} athlete={athlete} />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default AthleteCardList;
