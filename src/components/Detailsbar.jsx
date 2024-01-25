import { Navbar, Nav, Container } from "react-bootstrap";
import DarkLogo from "../assets/images/logos/color-transparent.png";

function Detailsbar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        data-bs-theme="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={DarkLogo}
              width="200"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/directorio">Directorio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Detailsbar;
