import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import DarkLogo from "../assets/images/main-logo.svg";
import LightLogo from "../assets/images/inverted-logo.svg";

function ColorSchemesExample() {
  const [showDarkNavbar, setShowDarkNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowDarkNavbar(true);
      } else {
        setShowDarkNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showDarkNavbar && (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="none"
          variant="dark"
          data-bs-theme="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={LightLogo}
                width="200"
                height="auto"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#nosotros">Quiénes Somos</Nav.Link>
                <Nav.Link href="#emprendedores">
                  Emprendedores Destacados
                </Nav.Link>
                <div className="vl"></div>
                <Nav.Link href="/directorio">Directorio</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      {!showDarkNavbar && (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          data-bs-theme="light"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={DarkLogo}
                width="200"
                height="auto"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-light" />
            <Navbar.Collapse id="responsive-navbar-nav-light">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="light underline-link">
                  Home
                </Nav.Link>
                <Nav.Link href="#nosotros" className="light underline-link">
                  Quiénes Somos
                </Nav.Link>
                <Nav.Link
                  href="#emprendedores"
                  className="light underline-link"
                >
                  Emprendedores Destacados
                </Nav.Link>
                <div className="vl light"></div>
                <Nav.Link href="/directorio" className="light underline-link">
                  Directorio
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default ColorSchemesExample;
