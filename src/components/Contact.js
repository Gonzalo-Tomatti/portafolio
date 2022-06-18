import React from "react";
import emailjs from "emailjs-com";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zk0gkje", //service id
        "template_ta7kmf4", //template id
        e.target,
        "KNxP9-XcginUiypWH" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); //limpiar campos
  };

  return (
    <section id="contact" className="light-bg p-3 section">
      <div className="container">
        <h1>Contacto</h1>
        <p className="p">
          Para ponerse en contacto, por favor complete el formulario a
          continuación.
        </p>
        <p className="p">
          Si lo prefiere, puede comunicarse por gmail: tomattigonzalo@gmail.com{" "}
          <FaEnvelope />
        </p>
        <p className="p"> Muchas gracias.</p>
        <form onSubmit={sendEmail}>
          <label htmlFor="name" className="form-label mt-3">
            Nombre
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            placeholder="Ingrese su nombre"
            required
          ></input>

          <label htmlFor="email" className="form-label mt-3">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            placeholder="Ingrese su correo electrónico"
            required
          ></input>

          <label htmlFor="message" className="form-label mt-3">
            Mensaje
          </label>
          <textarea
            id="message"
            cols="30"
            rows="4"
            className="form-input textarea"
            name="message"
            required
          ></textarea>

          <button type="submit" className="btn btn-dark m-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
