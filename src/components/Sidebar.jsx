import { useContext } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DataContext } from "./context/DataProvider";

export const Sidebar = () => {
  const value = useContext(DataContext);

  const handleCategorySelect = (selectedCategory) => {
    value.filterCategory(selectedCategory);
  };

  return (
    <>
      <NavDropdown
        title="Productos"
        id="productos-dropdown"
        onSelect={handleCategorySelect}
      >
        <NavDropdown.Item eventKey="Comida">Comida</NavDropdown.Item>
        <NavDropdown.Item eventKey="Costura">Costura</NavDropdown.Item>
        <NavDropdown.Item eventKey="Impresiones en 3D">
          Impresiones en 3D
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="Productos dentales">
          Productos dentales
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="Regalos">Regalos</NavDropdown.Item>
        <NavDropdown.Item eventKey="Tejidos">Tejidos</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="Servicios"
        id="servicios-dropdown"
        onSelect={handleCategorySelect}
      >
        <NavDropdown.Item eventKey="Barbería">Barbería</NavDropdown.Item>
        <NavDropdown.Item eventKey="Costura">Costura</NavDropdown.Item>
        <NavDropdown.Item eventKey="Electrónica">Electrónica</NavDropdown.Item>
        <NavDropdown.Item eventKey="Fotografía">Fotografía</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
