import React, { useEffect } from "react";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

//
const ContainerHome = () => {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, []);
  //
  return (
    <>
      <Navbar />
      <div className="container-home">
        <LeftBar />
        <RightBar />
      </div>
    </>
  );
};

export default ContainerHome;
