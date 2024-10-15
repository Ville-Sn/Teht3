import React from "react";
import { useContext, useState } from "react";
import athletesContext from "../context/AthletesContext";
import { Link } from "react-router-dom";
import "../assets/css/AthleteCard.css";

function AthleteCard(props) {
  const AthletesContext = useContext(athletesContext);
  const [showInfo, setShowInfo] = useState(false);

  const onShowClick = (e) => {
    setShowInfo((prevState) => !prevState);
  };

  const { id, nickname, sport, pictureURL, firstname, lastname, dateOfBirth, weight, achievements} = props.athlete;
  return (
    <div className="card card-body d-flex justify-Content-center athlete-card">
      <h4>{nickname}</h4>
      <h6>{sport}</h6>
      <img src={pictureURL} style={{maxWidth: '200px', maxHeight: '200px', objectFit: 'contain'}} alt="Athlete" className="mb-4 mt-2"></img>
      {showInfo ? (
        <div>
          <h6>name: {firstname} {lastname}</h6>
          <h6>born: {dateOfBirth}</h6>
          <h6>weight kg: {weight}</h6>
          <h6>achievements: {achievements}</h6>
          <div>
            <button className="btn btn-danger me-3" onClick={AthletesContext.deleteAthlete.bind(this, id)}
            >
              Delete
            </button>
            <Link to={`/athlete/${id}`} className="btn btn-primary"
          >
            Edit
          </Link>
          </div>
        </div>
      ) : null}

      <button className="buttonMore mt-3" onClick={onShowClick.bind(this)}>
        more
      </button>

    </div>
  );
}

export default AthleteCard;
