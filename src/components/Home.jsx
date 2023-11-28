import { useState, useContext } from "react";
import { DataContext } from "../components/context/DataProvider";
import About from "../assets/images/about.jpg";
import ColorSchemesExample from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Emprendedor } from "./emprendedores/emprendedor";

export const Home = () => {
  const { data } = useContext(DataContext);
  const phrases = [
    "Amamos nuestro trabajo",
    "Lo hacemos con excelencia",
    "Ayudamos a la economía local",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");

  const typeNextLetter = () => {
    const targetPhrase = phrases[currentPhraseIndex];
    const currentText = currentPhrase;
    const currentTextLength = currentText.length;
    const targetText = targetPhrase.slice(0, currentTextLength + 1);

    if (currentText !== targetText) {
      setCurrentPhrase(targetText);
    } else {
      setTimeout(() => {
        setCurrentPhrase("");
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }, 1000); // Espera un segundo antes de cambiar a la siguiente frase
    }
  };

  setTimeout(typeNextLetter, 100); // Comienza el carrusel

  return (
    <>
      <header>
        <nav>
          <ColorSchemesExample />
        </nav>
      </header>
      <main className="main_container">
        <section className="home" id="home">
          <div className="greeting-container">
            <h1 className="greeting">
              DIRECTORIO DE
              <br />
              <span className="resaltar">EMPRENDEDORES</span>
            </h1>
          </div>
          <div className="typing_carousel">
            <ul className="typing_carousel-data">
              <li>{currentPhrase}</li>
            </ul>
          </div>
        </section>
        <section className="nosotros" id="nosotros">
          <div className="intro">
            <div className="text">
              <h3 className="title">Directorio de EMPRENDEDORES</h3>
              <h5 className="subtitle">
                Un producto de{" "}
                <a
                  href="https://www.children.org/es"
                  target="_blank"
                  rel="noreferrer"
                >
                  CHILDREN INTERNATIONAL
                </a>
              </h5>
              <p className="description">
                Ecuador es reconocido como uno de los países más emprendedores
                de la región, pero lastimosamente también es uno de los países
                donde más fracasan los emprendimientos. Esto se debe entre otros
                factores a que es difícil insertarse en las economías locales
                caracterizadas por ser bastante competitivas. Nuestra apuesta es
                generar un ecosistema de apoyo mutuo entre emprendedores que
                permita aumentar el éxito y consolidación de los emprendimientos
                que hacen parte de él, basados en el apoyo a la difusión de
                negocios que constituyen una alternativa de sustento para
                familias económicamente vulnerables.
              </p>
            </div>
            <div className="image">
              <img src={About} alt="Nosotros" />
            </div>
          </div>
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com/childrenecuador"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/childrenecuador"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/childrenecuador/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/children-international-ecuador"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <button className="btn btn-primary">
            <a
              href="https://www.children.org/es/donate"
              target="_blank"
              rel="noreferrer"
            >
              Realiza una Donación
            </a>
          </button>
        </section>
        <section className="emprendedores" id="emprendedores">
          <h2 className="title-emprendedores">Emprendedores Destacados</h2>
          <div className="cards">
            {/* Mustra sólo tres emprendedores de mi elección en orden */}
            {data
              .filter((emprendedor) => emprendedor.name === "Tapicería Classic")
              .map((emprendedor) => (
                <Emprendedor
                  key={emprendedor.name}
                  photo={emprendedor.photo}
                  name={emprendedor.name}
                  owner={emprendedor.owner}
                  social_links={emprendedor.social_links}
                  description={emprendedor.description}
                />
              ))}
            {data
              .filter((emprendedor) => emprendedor.name === "Pizza Rappi")
              .map((emprendedor) => (
                <Emprendedor
                  key={emprendedor.name}
                  photo={emprendedor.photo}
                  name={emprendedor.name}
                  owner={emprendedor.owner}
                  social_links={emprendedor.social_links}
                  description={emprendedor.description}
                />
              ))}
            {data
              .filter((emprendedor) => emprendedor.name === "Costeñitas")
              .map((emprendedor) => (
                <Emprendedor
                  key={emprendedor.name}
                  photo={emprendedor.photo}
                  name={emprendedor.name}
                  owner={emprendedor.owner}
                  social_links={emprendedor.social_links}
                  description={emprendedor.description}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
};
