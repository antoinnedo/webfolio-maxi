import React from 'react';
import CitiExperience from "../components/citi.jsx";
import RakunaExperience from "../components/rakuna.jsx";
import OtherExperience from "../components/otherExperience.jsx";

const Experience = () => {
  return (
    <div id='experience'>
      <CitiExperience />
      <RakunaExperience />
      <OtherExperience />
    </div>
  );
};

export default Experience;
