import React from "react";
import slot from "../images/slot-machine-thumbnail.png";
import grace from "../images/grace-vitrofusion-thumbnail.png";
import cocktail from "../images/cocktail-collection-thumbnail.png";
import atardecer from "../images/atardecer-thumbnail.png";

const Projects = () => {
  const projects = [
    {
      title: "Cocktail Collection",
      labels: ["Html5", "Css3", "Bootstrap", "Typescript", "React"],
      description: `Está página utiliza la API TheCocktailDB.
      Según la categoría o bebida elegida, se cambia el endpoint para traer y mostrar las bebidas correspondientes.`,
      thumbnail: cocktail,
      live: "https://the-cocktail-collection.netlify.app/",
      github: "https://github.com/Gonzalo-Tomatti/cocktails",
    },
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
    {
      title: "Atardecer",
      labels: ["Html5", "Css3", "Bootstrap", "Typescript", "React"],
      description: `Esta app muestra una serie de edificios que se vuelven de color verde cuando tienen vista al atardecer. Además muestra un dato curioso sobre el número del edificio más alto que va cambiando a medida que cambian las alturas.`,
      thumbnail: atardecer,
      live: "https://atardecer.netlify.app/",
      github: "https://github.com/Gonzalo-Tomatti/atardecer",
    },
  ];
  return (
    <div className="projects text-center pt-3 pb-1">
      <div className="container">
        <h1 className="m-3">Proyectos</h1>
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
