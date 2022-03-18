import React, { useContext } from "react";
import { Dns, Navigation, Code, Info, Phone } from "@material-ui/icons";
import { storeAlContext } from "../../Context/FunctionAlContext";
import { useSelector } from "react-redux";

const LeftBar = () => {
  const { index, setIndex } = useContext(storeAlContext);
  const { user } = useSelector((state) => state.user);

  return (
    <div className="left-bar">
      <div className="parent-user">
        <h4 className="username">- Welcome {user.firstName.slice(0, 8)} </h4>
      </div>
      <span className="person">PERSONAL</span>
      <ul>
        <li onClick={() => setIndex(1)} className={index === 1 ? "active" : ""}>
          <Dns className="icon" />
          Information
        </li>
        <li onClick={() => setIndex(2)} className={index === 2 ? "active" : ""}>
          <Navigation className="icon" /> Lacation
        </li>
        <li onClick={() => setIndex(3)} className={index === 3 ? "active" : ""}>
          <Code className="icon" />
          Your Skills
        </li>
        <li onClick={() => setIndex(4)} className={index === 4 ? "active" : ""}>
          <Info className="icon" />
          About you
        </li>
        <li onClick={() => setIndex(5)} className={index === 5 ? "active" : ""}>
          <Phone className="icon" />
          Contact
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
