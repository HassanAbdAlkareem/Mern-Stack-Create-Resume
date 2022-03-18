import React from "react";
import imgResume from "../../image/images-resume.png";

const TopBarRusme = ({ resume }) => {
  const PF = "https://create-resume-now.herokuapp.com/images/";
  return (
    <div className="top-bar-resume">
      <div className="wrapper">
        <div className="info">
          <span className="fullName">{resume?.fullName}</span>
          <span className="jobTitle">Job Title - {resume?.jobTitle}</span>
          <span className="birthday">Birthday - {resume?.birthday}</span>
        </div>
        <div className="image">
          {resume?.picture ? (
            <img src={PF + resume.picture} />
          ) : (
            <img src={imgResume} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBarRusme;
