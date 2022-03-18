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
      <div className="item projects">
        <h3>Link My Works</h3>
        <span className="text">{resume?.url}</span>
      </div>

      <div className="item work-before">
        <h3> Work Before</h3>
        <span className="text">{resume?.workBefore}</span>
      </div>

      <div className="item about-you">
        <h3>About My</h3>
        <span className="text">{resume?.aboutYou}</span>
      </div>

      <div className="item contact-me">
        <h3>Contact My</h3>
        <div className="contact">
          <span>Email : {resume?.email}</span>
          <span>Number : {resume?.number}</span>
        </div>
      </div>

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
    </div>
  );
};

export default RightBarResume;
