import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaJs,
  FaNpm,
  FaNodeJs,
} from "react-icons/fa";
import ts from "../images/typescript-logo.png";
import mongo from "../images/mongodb-logo.png";

const Skills = () => {
  return (
    <div className="container text-center">
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
          <div className="tech">
            <FaReact className="react" /> <p>ReactJs</p>
          </div>
        </div>
        <div className=" d-sm-flex justify-content-center align-items-center mt-3">
          <div className="tech">
            <FaGitAlt className="git" /> <p>Git</p>
          </div>
          <div className="tech">
            <FaNpm className="npm" /> <p>NPM</p>
          </div>
          <div className="tech">
            <img className="ts" src={ts} alt="ts logo" />
            <p>TypeScript</p>
          </div>
          <div className="tech">
            <FaNodeJs className="nodejs" /> <p>NodeJs</p>
          </div>
          <div className="tech">
            <img className="mongo" src={mongo} alt="mongoDB logo" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
