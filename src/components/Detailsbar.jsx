import { Navbar, Container } from "react-bootstrap";
import DarkLogo from "../assets/images/main-logo.svg";

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
        </Container>
      </Navbar>
    </>
  );
}

export default Detailsbar;
