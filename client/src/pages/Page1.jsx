import { ArrowForward } from "@material-ui/icons";

//
const Page1 = ({ handleChange, setIndex, infoResume }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex(2);
  };

  //
  return (
    <div className="page">
      <div className="wrapper">
        <form onSubmit={handleSubmit} action="">
          <div className="item">
            <label>Full Name *</label>
            <input
              name="fullName"
              placeholder="Example / Hassan abd alkaeem"
              type="text"
              required
              onChange={handleChange}
              value={infoResume.fullName}
            />
          </div>
          <div className="item">
            <label>Job Title *</label>
            <input
              name="jobTitle"
              placeholder="Example / Web Development"
              type="text"
              required
              onChange={handleChange}
              value={infoResume.jobTitle}
            />
          </div>
          <div className="item">
            <label>Birthday </label>
            <input
              name="birthday"
              placeholder="Example : 2000/1/1"
              type="date"
              onChange={handleChange}
              value={infoResume.birthday}
            />
          </div>
          <div className="buttons">
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page1;
