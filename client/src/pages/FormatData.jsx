const FormatDate = (infoResume) => {
  const address = {
    country: infoResume.country,
    city: infoResume.city,
    closePoint: infoResume.closePoint,
  };

  const newData = {
    fullName: infoResume.fullName,
    jobTitle: infoResume.jobTitle,
    birthday: infoResume.birthday,
    email: infoResume.email,
    number: infoResume.number,
    aboutYou: infoResume.aboutYou,
    projects: infoResume.projects,
    workBefore: infoResume.workBefore,
    address: address,
    skills: infoResume.skills,
  };

  if (
    newData.fullName === ""
    // newData.jobTitle === "" ||
    // newData.address.city === "" ||
    // newData.address.country === "" ||
    // newData.skills.length === 0 ||
    // newData.email === "" ||
    // newData.number === ""
  ) {
    return "error";
  } else {
    return newData;
  }
};

export default FormatDate;

// //filter(
//   (skill) => skill.skill !== undefined && skill.exp !== undefined
//   ),
