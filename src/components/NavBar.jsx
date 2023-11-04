import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import iDealSetter from "../assets/images/iDealSetter.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ padding: "0" }}>
          <img
            src={iDealSetter}
            style={{ width: "10rem", height: "auto", padding: "0" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Quien Soy</Nav.Link>
            <Nav.Link
              href="https://www.idealsetter.com/formador?_gl=1*t5sq51*_gcl_au*ODA5OTEzNDMxLjE2OTg5ODMzMTk."
              target="_blank"
            >
              Eres una empresa?
            </Nav.Link>
            <NavDropdown title="Redes" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.instagram.com/idealsetter/"
                target="_blank"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.youtube.com/@ChristianBresser"
                target="_blank"
              >
                YouTube
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://www.instagram.com/christian_bresser/"
                target="_blank"
              >
                Christian Bresser
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
