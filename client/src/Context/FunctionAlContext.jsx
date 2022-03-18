import React, { useState } from "react";
import { createContext } from "react";

export const storeAlContext = createContext();
//

const FunctionAlContext = ({ children }) => {
  const [index, setIndex] = useState(1);

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
    url: "",
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
      }}
    >
      {children}
    </storeAlContext.Provider>
  );
};

export default FunctionAlContext;
