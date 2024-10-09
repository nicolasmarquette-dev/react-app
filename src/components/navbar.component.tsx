import "./navbar.styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LABELS, { LanguageKeys } from "../constants/labels";
import { LanguageSelector } from "./language-selector.component";

interface NavBarProps {
  language: LanguageKeys;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageKeys>>;
}

export const NavBar = (props: NavBarProps): JSX.Element => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark" fixed="top">
      <Container>
        <Navbar.Brand href="/home">
          {LABELS[props.language].THE_RESTAURANT}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">{LABELS[props.language].HOME}</Nav.Link>
            <Nav.Link href="/menu">{LABELS[props.language].MENU}</Nav.Link>
            <Nav.Link href="/contact">
              {LABELS[props.language].CONTACT}
            </Nav.Link>
            <NavDropdown
              title={LABELS[props.language].HISTORY}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                {LABELS[props.language].SINCE}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {LABELS[props.language].OTHER}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {LABELS[props.language].APPLY}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Ajout du LanguageSelector correctement aligné */}
          <LanguageSelector
            language={props.language}
            setLanguage={props.setLanguage}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
