import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResume } from "../../redux/resumeSlice";
import LeftBarResume from "./LeftBarResume";
import RightBarResume from "./RightBarResume";
import TopBarRusme from "./TopBarRusme";

const Resume = () => {
  const dispatch = useDispatch();
  const [className, setClassName] = useState("resume");
  const { resume, loading, error } = useSelector((state) => state.resume);

  //

  useEffect(() => {
    dispatch(getResume());
  }, [dispatch]);

  return (
    <div className="parent">
      {loading ? (
        <div className="loading">Loading ... </div>
      ) : error ? (
        <p>Something is wrong</p>
      ) : (
        <>
          <div className={className}>
            <TopBarRusme resume={resume} />
            <div className="wrapper">
              <LeftBarResume resume={resume} />
              <RightBarResume resume={resume} setClassName={setClassName} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resume;
