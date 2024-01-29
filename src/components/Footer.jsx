
import InfoLogo from "../assets/images/inverted-logo.svg";

export const Footer = () => {
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
        <form action="Post">
          <p>Mantentente al día con una notificación por email</p>
          <input type="email" className="email" placeholder="su@email.com" />
          <button className="btn btn-primary submit">Enviar</button>
        </form>
      </div>
      <div className="linea"></div>
    </section>
  );
}

