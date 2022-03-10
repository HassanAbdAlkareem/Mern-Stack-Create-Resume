import React, { useState } from "react";
import { createContext } from "react";

export const storeAlContext = createContext();
//

const FunctionAlContext = ({ children }) => {
  const [index, setIndex] = useState(1);
  const [errorReload, setErrorReload] = useState(false);

  console.log(errorReload);
  const [infoResume, setInfoResume] = useState({
    fullName: "",
    jobTitle: "",
    birthday: "",
    country: "",
    city: "",
    closePoint: "",
    email: "",
    number: "",
    skills: [],
    aboutYou: "",
    projects: "",
    picture: "",
    workBefore: "",
  });

  const handleChange = (e) => {
    setInfoResume({ ...infoResume, [e.target.name]: e.target.value });
  };

  const previousPage = () => {
    setIndex((prev) => prev - 1);
  };

  //
  return (
    <storeAlContext.Provider
      value={{
        index,
        setIndex,
        infoResume,
        setInfoResume,
        handleChange,
        previousPage,
        errorReload,
        setErrorReload,
      }}
    >
      {children}
    </storeAlContext.Provider>
  );
};

export default FunctionAlContext;
