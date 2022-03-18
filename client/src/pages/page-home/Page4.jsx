import { ArrowBack } from "@material-ui/icons";

const Page4 = ({ handleChange, previousPage, setIndex, infoResume }) => {
  //
  const handleClick = (e) => {
    e.preventDefault();
    setIndex((prev) => prev + 1);
  };

  //
  return (
    <div className="page">
      <div className="wrapper">
        <form onSubmit={handleClick} action="">
          <div className="item">
            <label>URL </label>
            <input
              onChange={handleChange}
              name="url"
              type="text"
              value={infoResume.url}
              placeholder="Link For Your Work"
            />
          </div>
          <div className="item">
            <label>Where did you work before? </label>
            <input
              onChange={handleChange}
              name="workBefore"
              type="text"
              value={infoResume.workBefore}
            />
          </div>
          <div className="item">
            <label>About You</label>
            <textarea
              onChange={handleChange}
              name="aboutYou"
              placeholder="Talk about your work, your experience, or why you are interested in this field "
              type="text"
              value={infoResume.aboutYou}
            />
          </div>
          <div className="buttons">
            <button>
              <ArrowBack onClick={() => previousPage()} className="icon" />
            </button>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page4;
