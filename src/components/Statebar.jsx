import { Navbar, Nav, Container } from "react-bootstrap";
import DarkLogo from "../assets/images/logos/Color-transparent.svg";
import { Sidebar } from "./Sidebar";


function Statebar() {

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
          <Navbar.Toggle aria-controls="responsive-navbar-nav-light" />
          <Navbar.Collapse id="responsive-navbar-nav-light">
            <Nav className="me-auto">
              <Sidebar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Statebar;
