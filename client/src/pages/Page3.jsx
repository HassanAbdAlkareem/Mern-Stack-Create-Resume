import React, { useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

const Page3 = ({ setIndex, previousPage, setInfoResume, infoResume }) => {
  const [skillOne, setSkillOne] = useState({
    skill: infoResume?.skills[0]?.skill,
    exp: infoResume?.skills[0]?.exp,
  });
  const [skillTow, setSkillTow] = useState({
    skill: infoResume?.skills[1]?.skill,
    exp: infoResume?.skills[1]?.exp,
  });
  const [skillThree, setSkillThree] = useState({
    skill: infoResume?.skills[2]?.skill,
    exp: infoResume?.skills[2]?.exp,
  });
  const [skillFour, setSkillFour] = useState({
    skill: infoResume?.skills[3]?.skill,
    exp: infoResume?.skills[3]?.exp,
  });
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex((prev) => prev + 1);
    const skills = [skillOne, skillTow, skillThree, skillFour];
    setInfoResume((prev) => ({ ...prev, skills: skills }));
  };

  //
  return (
    <div className="page">
      <div className="wrapper">
        <form onSubmit={handleSubmit} action="">
          <div className="item">
            <label>Skill One *</label>
            <input
              value={skillOne.skill}
              required
              onChange={(e) =>
                setSkillOne({ ...skillOne, skill: e.target.value })
              }
              placeholder="Example / developer javaScript"
              type="text"
            />
            <input
              onChange={(e) =>
                setSkillOne({ ...skillOne, exp: e.target.value })
              }
              value={skillOne.exp}
              type="number"
              placeholder="Years Experience"
            />
          </div>
          <div className="item">
            <label>Skill Tow</label>
            <input
              onChange={(e) =>
                setSkillTow({ ...skillTow, skill: e.target.value })
              }
              value={skillTow.skill}
              name="skillTow"
              type="text"
            />
            <input
              value={skillTow.exp}
              name="skill"
              onChange={(e) =>
                setSkillTow({ ...skillTow, exp: e.target.value })
              }
              type="number"
            />
          </div>
          <div className="item">
            <label>Skill Three </label>
            <input
              value={skillThree.skill}
              onChange={(e) =>
                setSkillThree({ ...skillThree, skill: e.target.value })
              }
              type="text"
            />
            <input
              value={skillThree.exp}
              onChange={(e) =>
                setSkillThree({ ...skillThree, exp: e.target.value })
              }
              type="number"
            />
          </div>
          <div className="item">
            <label>Skill Four </label>
            <input
              value={skillFour.skill}
              type="text"
              onChange={(e) =>
                setSkillFour({ ...skillFour, skill: e.target.value })
              }
            />
            <input
              value={skillFour.exp}
              onChange={(e) =>
                setSkillFour({ ...skillFour, exp: e.target.value })
              }
              type="number"
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

export default Page3;
