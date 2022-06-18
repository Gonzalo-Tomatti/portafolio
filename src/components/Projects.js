import React from "react";
import slot from "../images/slot-machine-thumbnail.png";
import grace from "../images/grace-vitrofusion-thumbnail.png";

const Projects = () => {
  const projects = [
    {
      title: "Slot Machine",
      labels: ["Html5", "Css3", "Javascript", "React"],
      description: `Como el nombre lo indica, esta app es una slot machine que permite
jugar por diversión con dinero ficticio. Cuenta con tres filas de íconos que giran al
hacer click en "play" y paran después de 2.4s. Al combinar tres
copias iguales de un mismo ícono horizontalmente en cualquiera de
las tres filas suma la cantidad de dinero apostada multiplicada
por el valor del ícono y de la fila.`,
      thumbnail: slot,
      live: "https://web-dev-slot.netlify.app/",
      github: "https://github.com/Gonzalo-Tomatti/slot-machine",
    },
    {
      title: "Grace Vitrofusion",
      labels: ["Html5", "Css3", "Bootstrap", "Javascript", "React"],
      description: `Esta es una página dedicada a la exhibición de artículos de vitrofusión (objetos decorativos hechos con vidrio).

      Cuenta con 12 categorías mostradas en el menú principal. Al entrar a cada una se pueden recorrer todas las fotos pertenecientes a la categoría elegida. Estas fotos se cargan de a 8 por página y, en caso de haber más, se muestra la paginación para recorrer la categoría.`,
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
                <span key={index} className="label rounded-pill bg-dark">
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
