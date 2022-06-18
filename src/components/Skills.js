import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container text-center">
      <h1 className="mb-4">Skills</h1>
      <div className="d-flex justify-content-center d-sm-block mb-4">
        <div className=" d-sm-flex justify-content-center mt-3">
          <div className="tech">
            <FaHtml5 className="html" /> <p>Html5</p>
          </div>
          <div className="tech">
            <FaCss3 className="css" /> <p>Css3</p>
          </div>
          <div className="tech">
            <FaBootstrap className="bootstrap" /> <p>Bootstrap</p>
          </div>
          <div className="tech">
            <FaJs className="js" /> <p>Javascript</p>
          </div>
        </div>
        <div className=" d-sm-flex justify-content-center mt-3">
          <div className="tech">
            <FaReact className="react" /> <p>ReactJs</p>
          </div>
          <div className="tech">
            <FaGithub className="github" /> <p>GitHub</p>
          </div>
          <div className="tech">
            <FaGitAlt className="git" /> <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
