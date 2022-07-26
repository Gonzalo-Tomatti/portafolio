import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import welcome from "../images/bienvenido.jpg";

const Header = () => {
  return (
    <header className="d-flex align-items-center">
      <div className="container ">
        <div className="row">
          <div className="col-6 d-none d-lg-flex justify-content-center">
            <img className="welcome" src={welcome} alt="bienvenido" />
          </div>
          <div className="col col-lg-6 d-flex flex-column justify-content-center">
            <h1>
              Hola, soy Gonzalo.
              <br></br>
              Desarrollador Fullstack.
            </h1>
            <div className="links ">
              <a href="https://github.com/Gonzalo-Tomatti" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gonzalo-tomatti/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              {/*<a className="cv" href="./cv.pdf" download="GONZALO TOMATTI - CV">
                CV
  </a>*/}
              <a href="#contact">
                <FaEnvelope />
              </a>
            </div>
            <p>Amo idear y crear cosas para la web.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
