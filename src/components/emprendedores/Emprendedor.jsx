import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Emprendedor = ({ name, photo, description }) => {
  const renderImages = () => {
    if (Array.isArray(photo)) {
      const firstImage = photo[0];
      return (
        <div className="emprendedor__images">
          <img
            key={0}
            src={firstImage}
            alt={`${name}`}
            className="emprendedor__image"
          />
        </div>
      );
    } else {
      return <img src={photo} alt={name} />;
    }
  };

  return (
    <div className="emprendedor__cards">
      <Link to={`/directorio/${name}`} className="emprendedor">
        {renderImages()}
        <div className="emprendedor__info">
          <div className="emprendedor__name">
            <h5>{name}</h5>
          </div>
          <p className="emprendedor__description">{description}</p>
        </div>
      </Link>
      <div className="line__card"></div>
      <Link to={`/directorio/${name}`} className="btn btn-primary ver__mas">
        Ver Más
      </Link>
    </div>
  );
};

Emprendedor.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  description: PropTypes.string.isRequired,
};
