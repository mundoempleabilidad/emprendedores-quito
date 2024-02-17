import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import InfoLogo from "../assets/images/inverted-logo.svg";

export const Footer = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zqkmvae", "template_swsr4qw", form.current, {
        publicKey: "-p7HaJH_sHp5aXAPX",
      })
      .then(
        () => {
          setMessageSent("success");
          console.log("Mensaje enviado exitosamente!");
          setTimeout(() => {
            setMessageSent(null);
            form.current.reset();
          }, 2000); // Desaparece la alerta y limpia el input después de 2 segundos
        },
        (error) => {
          setMessageSent("error");
          console.log("Intentalo nuevamente más tarde...", error.text);
          setTimeout(() => {
            setMessageSent(null);
          }, 2000); // Desaparece la alerta después de 2 segundos
        }
      );
  };

  return (
    <section className="footer-section">
      <div className="footer">
        <div className="navegacion">
          <h5>Navegación</h5>
          <ul>
            <li>
              <a href="#nosotros">Quiénes Somos</a>
            </li>
            <li>
              <a href="#emprendedores">Emprendedores Destacados</a>
            </li>
            <li>
              <a href="https://www.children.org/">
                <img src={InfoLogo} alt="info-logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contacto">
          <h5>Contáctanos</h5>
          <ul>
            <li>
              <p>
                Email: <br /> circulodeemprendedoresquito@gmail.com
              </p>
            </li>
            <li>
              <p>Teléfono: 0986087688</p>
            </li>
          </ul>
        </div>
        <form action="Post" ref={form} onSubmit={sendEmail}>
          <p>Mantentente al día con una notificación por email</p>
          <input
            type="email"
            className="email"
            placeholder="su@email.com"
            name="message"
          />
          <button className="btn btn-primary submit" type="submit">
            Enviar
          </button>
          {messageSent === "success" && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                color: "white",
                backgroundColor: "rgba(0, 128, 0, 0.8)",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              Mensaje enviado exitosamente
            </div>
          )}
          {messageSent === "error" && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                color: "white",
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              ¡Ups! Inténtalo nuevamente más tarde...
            </div>
          )}
        </form>
      </div>
      <div className="linea"></div>
    </section>
  );
};
