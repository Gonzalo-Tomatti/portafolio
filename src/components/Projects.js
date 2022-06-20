import React from "react";
import slot from "../images/slot-machine-thumbnail.png";
import grace from "../images/grace-vitrofusion-thumbnail.png";

const Projects = () => {
  const projects = [
    {
      title: "Slot Machine",
      labels: ["Html5", "Css3", "Javascript", "React"],
      description: `Como el nombre lo indica, esta app es una slot machine que permite
      jugar por diversión con dinero ficticio. 

      Además de emplear las funcionalidades típicas de React como hooks y componentes, hice uso de la API context que este provee para manejar el estado del proyecto.`,
      thumbnail: slot,
      live: "https://web-dev-slot.netlify.app/",
      github: "https://github.com/Gonzalo-Tomatti/slot-machine",
    },
    {
      title: "Grace Vitrofusion",
      labels: ["Html5", "Css3", "Bootstrap", "Javascript", "React"],
      description: `Esta es una página dedicada a la exhibición de artículos de vitrofusión (objetos decorativos hechos con vidrio).

      La hice implementando varias características de React como la división de funcionalidad con componentes, el uso de hooks y react router. El estilo está hecho con bootstrap y css personalizado.`,
      thumbnail: grace,
      live: "https://grace-vitrofusion.netlify.app/",
      github: "https://github.com/Gonzalo-Tomatti/grace-vitrofusion",
    },
  ];
  return (
    <div className="projects text-center py-5">
      <div className="container">
        <h1 className="mb-3">Proyectos</h1>
        {projects.map((p, index) => (
          <div key={index} className="row project">
            <div className="col col-md-6">
              <h2>{p.title}</h2>
              {p.labels.map((l, index) => (
                <span key={index} className="label rounded-pill bg-secondary">
                  {l}
                </span>
              ))}
              <p className="my-4">{p.description}</p>
              <a href={p.live} target="_blank" className="btn btn-dark me-4">
                Ver Proyecto
              </a>
              <a href={p.github} target="_blank" className="btn btn-dark">
                GitHub
              </a>
            </div>
            <div className="col col-md-6">
              <a href={p.live} target="_blank">
                <img
                  className="thumbnail mt-5"
                  src={p.thumbnail}
                  alt="slot machine"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
