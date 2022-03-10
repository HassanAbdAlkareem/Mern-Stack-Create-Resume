import React from "react";
import imgResume from "../../image/download.png";

const TopBarRusme = ({ resume }) => {
  return (
    <div className="top-bar-resume">
      <div className="wrapper">
        <div className="info">
          <span className="fullName">{resume?.fullName}</span>
          <span className="jobTitle">Job Title - {resume?.jobTitle}</span>
          <span className="birthday">Birthday - {resume?.birthday}</span>
        </div>
        <div className="image">
          <img src={imgResume} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBarRusme;
