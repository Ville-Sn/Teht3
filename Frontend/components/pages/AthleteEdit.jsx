import { React, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import athletesContext from "../../context/AthletesContext";

const AthleteEdit = (props) => {
  const [athlete, setAthlete] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    dateOfBirth: '',
    weight: '',
    pictureURL: '',
    sport: '',
    achievements: '',
  });

  const AthletesContext = useContext(athletesContext);
  const { id } = useParams();
  let history = useNavigate();

  const onDeleteClick = (id) => {
    AthletesContext.deleteAthlete(id);
    window.location.reload();
    history("/");
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      AthletesContext.getAthlete(id).then((res) => {
        setAthlete(res);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    AthletesContext.putAthlete(id, athlete);
    history("/athleteList");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAthlete({ ...athlete, [name]: value });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div className="card-body mb-4">
            <form onSubmit={handleSubmit.bind(this)}>
              <label>Firstname</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="form-control form-control-lg"
                placeholder="input firstname"
                value={athlete.firstname}
                onChange={onChangeHandler}
              />
              <label>Lastname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-control form-control-lg"
                placeholder="input lastname"
                value={athlete.lastname}
                onChange={onChangeHandler}
              />
              <label>Nickname</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                className="form-control form-control-lg"
                placeholder="input nickname"
                value={athlete.nickname}
                onChange={onChangeHandler}
              />
              <label>Date of birth</label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="form-control form-control-lg"
                placeholder="input dateOfBirth"
                value={athlete.dateOfBirth}
                onChange={onChangeHandler}
              />
              <label>Weight</label>
              <input
                type="number"
                name="weight"
                id="weight"
                className="form-control form-control-lg"
                placeholder="input weight"
                value={athlete.weight}
                onChange={onChangeHandler}
              />
              <label>Picture</label>
              <input
                type="text"
                name="pictureURL"
                id="pictureURL"
                className="form-control form-control-lg"
                placeholder="input pictureURL"
                value={athlete.pictureURL}
                onChange={onChangeHandler}
              />
              <label>Sport</label>
              <input
                type="text"
                name="sport"
                id="sport"
                className="form-control form-control-lg"
                placeholder="input sport"
                value={athlete.sport}
                onChange={onChangeHandler}
              />
              <label>Achievements</label>
              <textarea
                type="text"
                name="achievements"
                id="achievements"
                className="form-control form-control-lg"
                placeholder="input achievements"
                value={athlete.achievements}
                onChange={onChangeHandler}
                style={{ minHeight: "200px" }}
              />
              <div className="d-flex justify-content-center mt-4">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => history("/athleteList")}
              >
                Back
              </button>
              </div>
              
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-primary me-4">
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={onDeleteClick.bind(this)}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
          <div>delete save</div>
        </div>
      </div>
    </>
  );
};

export default AthleteEdit;
