import React from "react";

const RightBarResume = ({ resume, setClassName }) => {
  //
  const handleChangeColoe = (color) => {
    if (color === "white") {
      setClassName("resume white");
    }
    if (color === "mix") {
      setClassName("resume mix");
    }
    if (color === "black") {
      setClassName("resume");
    }
  };

  return (
    <div className="right-bar-resume">
      <div className="colors">
        <div
          className="color mix"
          onClick={() => handleChangeColoe("mix")}
        ></div>
        <div
          className="color white"
          onClick={() => handleChangeColoe("white")}
        ></div>
        <div
          className="color balck"
          onClick={() => handleChangeColoe("black")}
        ></div>
      </div>
      {resume?.aboutYou && (
        <div className="item about-you">
          <h3>About You</h3>
          <span className="text">{resume.aboutYou}</span>
        </div>
      )}

      {resume?.workBefore && (
        <div className="item work-before">
          <h3> work before?</h3>
          <span className="text">{resume.workBefore}</span>
        </div>
      )}

      {resume?.projects && (
        <div className="item projects">
          <h3>Url Projects</h3>
          <span className="text">{resume.projects}</span>
        </div>
      )}
    </div>
  );
};

export default RightBarResume;
