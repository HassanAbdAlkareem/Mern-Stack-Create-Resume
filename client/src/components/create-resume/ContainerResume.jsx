import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getResume } from "../../redux/resumeSlice";
import LeftBarResume from "./LeftBarResume";
import RightBarResume from "./RightBarResume";
import TopBarRusme from "./TopBarRusme";

const Resume = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [className, setClassName] = useState("resume");
  const { resume, loading, error } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getResume(history.location.state));
  }, [dispatch]);

  return (
    <div className="parent">
      <div className={className}>
        {loading ? (
          <div className="loading">Loading ... </div>
        ) : error ? (
          <p>Something is wrong</p>
        ) : (
          <>
            <TopBarRusme resume={resume} />
            <div className="wrapper">
              <LeftBarResume resume={resume} />
              <RightBarResume resume={resume} setClassName={setClassName} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resume;
