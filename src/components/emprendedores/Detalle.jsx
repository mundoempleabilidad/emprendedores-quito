import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import Detailsbar from "../Detailsbar";
export const Detalle = () => {
  const value = useContext(DataContext);
  const [detalle, setDetalle] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await value.resetData(); // Espera a que se complete la operación resetData
      const emprendedorEncontrado = value.data.find(
        (emprendedor) => emprendedor.name === params.name
      );

      if (emprendedorEncontrado) {
        setDetalle(emprendedorEncontrado);
      }
    };

    fetchData();
  }, [params.name, value]);

  if (!detalle) {
    return (
      <>
        <header>
          <Detailsbar />
        </header>
        <div>Emprendedor no encontrado</div>;
      </>
    );
  }

  if (detalle.catalogo === "#") {
    return (
      <>
        <header>
          <Detailsbar />
        </header>
        <div className="details">
          <Carousel>
            {detalle.photo.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${detalle.name} - ${index}`}
                />
                <h3 className="details__name">{detalle.name}</h3>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="details__description">
            <h2>{detalle.owner}</h2>
            <ul className="social-media details">
              {detalle.social_links.map((link, index) => (
                <li key={index} className="social__link">
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {/* Utiliza el ícono correspondiente a la red social */}
                    {link.name === "Facebook" && <FaFacebook />}
                    {link.name === "Whatsapp" && <FaWhatsapp />}
                    {link.name === "Instagram" && <FaInstagram />}
                    {link.name === "Twitter" && <FaTwitter />}
                  </a>
                </li>
              ))}
            </ul>
            <p className="details__info">{detalle.description}</p>
          </div>
          <div className="line__card"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <header>
        <Detailsbar />
      </header>
      <div className="details">
        <Carousel>
          {detalle.photo.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`${detalle.name} - ${index}`}
              />
              <h3 className="details__name">{detalle.name}</h3>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="details__description">
          <h2>{detalle.owner}</h2>
          <ul className="social-media details">
            {detalle.social_links.map((link, index) => (
              <li key={index} className="social__link">
                <a href={link.url} target="_blank" rel="noreferrer">
                  {/* Utiliza el ícono correspondiente a la red social */}
                  {link.name === "Facebook" && <FaFacebook />}
                  {link.name === "Whatsapp" && <FaWhatsapp />}
                  {link.name === "Instagram" && <FaInstagram />}
                  {link.name === "Twitter" && <FaTwitter />}
                </a>
              </li>
            ))}
          </ul>
          <p className="details__info">{detalle.description}</p>
        </div>
        <div className="details__catalog">
          <object
            data={`./${detalle.catalogo}`}
            type="application/pdf"
          ></object>
        </div>
        <div className="line__card"></div>
      </div>
    </>
  );
};
