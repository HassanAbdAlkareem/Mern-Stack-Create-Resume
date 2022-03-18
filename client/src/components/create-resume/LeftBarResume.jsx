import React from "react";

const LeftBarResume = ({ resume }) => {
  return (
    <div className="left-bar-resume">
      <div className="skills">
        <h3>My Skills</h3>
        {resume?.skills?.map((s, i) => (
          <div key={i} className="skill">
            <>
              <span className="text">
                <b>
                  {i + 1}- {s?.skill}
                </b>
              </span>
              <span className="exp">
                <b className="exp-word">experience</b> <b>{s?.exp}</b> years
              </span>
            </>
          </div>
        ))}
      </div>

      <div className="location">
        <h3>residential</h3>
        <div className="residential">
          <span>Country : {resume?.address?.country}</span>
          <span>City : {resume?.address?.city}</span>
          {resume?.address?.closePoint && (
            <span>Close Point :{resume.address.closePoint}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftBarResume;
