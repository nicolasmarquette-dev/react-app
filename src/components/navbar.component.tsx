import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LABELS from "../constants/labels";

export const NavBar = (): JSX.Element => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/home">{LABELS.en.THE_RESTAURANT}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">{LABELS.en.HOME}</Nav.Link>
            <Nav.Link href="/menu">{LABELS.en.MENU}</Nav.Link>
            <Nav.Link href="/contact">{LABELS.en.CONTACT}</Nav.Link>
            <NavDropdown title="Our history" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                {LABELS.en.SINCE}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {LABELS.en.OTHER}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {LABELS.en.APPLY}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
