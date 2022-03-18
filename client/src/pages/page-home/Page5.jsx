import FormatData from "./FormatData.jsx";
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createResume } from "../../redux/resumeSlice";
import { Link } from "react-router-dom";

const Page5 = ({ handleChange, previousPage, infoResume }) => {
  const [errorSomeThingRequired, setErrorSomeThingRequired] = useState(null);
  const dispatch = useDispatch();
  const { error: errorFromApi } = useSelector((state) => state.resume);
  //

  const handleClick = async (e) => {
    e.preventDefault();
    setErrorSomeThingRequired(false);
    const data = FormatData(infoResume);
    if (data !== "error") {
      dispatch(createResume(data));
      setErrorSomeThingRequired(false);
    } else if (errorFromApi) {
      setErrorSomeThingRequired(true);
    } else {
      setErrorSomeThingRequired(true);
    }
  };

  //
  return (
    <div className="page">
      <div className="wrapper">
        <form encType="multipart/form-data" onSubmit={handleClick}>
          <div className="item">
            <label>Email *</label>
            <input
              onChange={handleChange}
              name="email"
              placeholder="Example / hassan@gmail.com"
              type="text"
              value={infoResume.email}
            />
          </div>
          <div className="item">
            <label>Number *</label>
            <input
              value={infoResume.number}
              onChange={handleChange}
              name="number"
              placeholder="Example / 07725387274"
              type="text"
            />
          </div>
          <div className="buttons">
            <button>
              <ArrowBack onClick={() => previousPage()} className="icon" />
            </button>

            <button className="submit" type="submit">
              Finish
            </button>

            {errorSomeThingRequired === false && errorFromApi === false && (
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/resume", state: infoResume }}
              >
                Go
              </Link>
            )}
          </div>
        </form>

        {errorSomeThingRequired && (
          <p className="error-format">
            Something is required but left blank. Please make sure to enter all
            the required data !
          </p>
        )}
        {errorFromApi && (
          <p className="error-format">Something is error from server</p>
        )}
      </div>
    </div>
  );
};

export default Page5;
