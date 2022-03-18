import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/authSlice";
//
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();
  //
  const handleClick = () => {
    dispatch(loginUser(firstName));
  };
  //
  return (
    <div className="login">
      <input
        placeholder="Enter First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={handleClick}>Log In</button>
    </div>
  );
};

export default Login;
