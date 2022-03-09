import React from "react";
import { AssignmentInd } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <AssignmentInd className="icon" />
        <span className="logo">Create Your Resume !</span>
      </div>
    </div>
  );
};

export default Navbar;
