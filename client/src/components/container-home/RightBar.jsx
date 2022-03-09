import React, { useContext } from "react";
import Page1 from "../../pages/Page1";
import Page2 from "../../pages/Page2";
import Page3 from "../../pages/Page3";
import Page4 from "../../pages/Page4";
import Page5 from "../../pages/Page5";
import { storeAlContext } from "../../Context/FunctionAlContext";

const RightBar = () => {
  const {
    index,
    previousPage,
    infoResume,
    setInfoResume,
    handleChange,
    setIndex,
  } = useContext(storeAlContext);

  return (
    <div className="right-bar">
      {index === 1 ? (
        <Page1
          setIndex={setIndex}
          handleChange={handleChange}
          infoResume={infoResume}
        />
      ) : index === 2 ? (
        <Page2
          handleChange={handleChange}
          previousPage={previousPage}
          setIndex={setIndex}
          infoResume={infoResume}
        />
      ) : index === 3 ? (
        <Page3
          previousPage={previousPage}
          setIndex={setIndex}
          setInfoResume={setInfoResume}
          infoResume={infoResume}
        />
      ) : index === 4 ? (
        <Page4
          handleChange={handleChange}
          previousPage={previousPage}
          setIndex={setIndex}
          infoResume={infoResume}
        />
      ) : (
        <Page5
          previousPage={previousPage}
          setIndex={setIndex}
          handleChange={handleChange}
          infoResume={infoResume}
        />
      )}
    </div>
  );
};

export default RightBar;
