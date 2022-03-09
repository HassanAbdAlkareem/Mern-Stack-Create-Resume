import React, { useContext, useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

const Page2 = ({ previousPage, handleChange, setIndex, infoResume }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="page">
      <div className="wrapper">
        <form onSubmit={handleSubmit} action="">
          <div className="item">
            <label>Country *</label>
            <input
              required
              name="country"
              placeholder="Example / Iraq"
              type="text"
              onChange={handleChange}
              value={infoResume.country}
            />
          </div>
          <div className="item">
            <label>City*</label>
            <input
              required
              onChange={handleChange}
              name="city"
              placeholder="Example / Baghdad"
              type="text"
              value={infoResume.city}
            />
          </div>
          <div className="item">
            <label>Close Point </label>
            <input
              name="closePoint"
              type="text"
              placeholder="Example / Mansoura"
              onChange={handleChange}
              value={infoResume.closePoint}
            />
          </div>
          <div className="buttons">
            <button>
              <ArrowBack onClick={() => previousPage()} className="icon" />
            </button>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page2;
