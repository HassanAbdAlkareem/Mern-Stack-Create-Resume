import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getResume } from "../../redux/resumeSlice";
import LeftBarResume from "./LeftBarResume";
import RightBarResume from "./RightBarResume";
import TopBarRusme from "./TopBarRusme";
import { storeAlContext } from "../../Context/FunctionAlContext";

const Resume = () => {
  const { errorReload } = useContext(storeAlContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [className, setClassName] = useState("resume");
  const { resume, loading, error } = useSelector((state) => state.resume);

  //P

  errorReload === true &&
    setTimeout(() => {
      window.location.reload();
    }, [2000]);
  //
  useEffect(() => {
    dispatch(getResume(history.location.state));
  }, [dispatch, history.location.state]);

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
