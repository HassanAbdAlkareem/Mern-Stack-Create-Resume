import React from "react";
import FormatData from "./FormatData";
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createResume } from "../redux/resumeSlice";
import { useHistory } from "react-router-dom";

const Page5 = ({ handleChange, previousPage, infoResume }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  //

  const handleClick = (e) => {
    e.preventDefault();
    const data = FormatData(infoResume);
    if (data !== "error") {
      dispatch(createResume(data));
      history.push("/resume", data?.fullName);
      window.location.reload();
      setError(false);
    } else {
      setError(true);
    }
  };
  //
  return (
    <div className="page">
      <div className="wrapper">
        <form onSubmit={handleClick} action="">
          <div className="item">
            <label>Email *</label>
            <input
              onChange={handleChange}
              name="email"
              placeholder="Example / hassan@gmail.com"
              type="text"
              value={infoResume.email}
            />
          </div>
          <div className="item">
            <label>Number *</label>
            <input
              value={infoResume.number}
              onChange={handleChange}
              name="number"
              placeholder="Example / 07725387274"
              type="text"
            />
          </div>
          <div className="buttons">
            <button>
              <ArrowBack onClick={() => previousPage()} className="icon" />
            </button>
            <button className="submit" type="submit">
              Finish
            </button>
          </div>
        </form>
        <p className={error ? "error-format active" : "error-format"}>
          Something is required but left blank. Please make sure to enter all
          the required data !
        </p>
      </div>
    </div>
  );
};

export default Page5;
