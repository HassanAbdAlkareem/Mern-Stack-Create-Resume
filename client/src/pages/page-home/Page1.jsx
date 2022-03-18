//
const Page1 = ({ handleChange, setIndex, infoResume, setInfoResume }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex(2);
  };

  //
  return (
    <div className="page">
      <div className="wrapper">
        <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
          <div className="item">
            <label>Full Name *</label>
            <input
              name="fullName"
              placeholder="Example / Hassan abd alkaeem"
              type="text"
              onChange={handleChange}
              value={infoResume.fullName}
              required
            />
          </div>

          <div className="item">
            <label>Birthday </label>
            <input
              required
              name="birthday"
              placeholder="Example : 2000/1/1"
              type="date"
              onChange={handleChange}
              value={infoResume.birthday}
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

          <p className="note">
            Note : this mark <b>*</b> means that the field is required
          </p>

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
