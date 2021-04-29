import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AppContentContainer = styled.div`
  margin-top :3%;
  display : flex ;
  flex-wrap : wrap;
  height: 100%;
  width: 100%;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width : 100% ; 

`;

function AppLayout({ children }) {

  return (
    <AppContainer>
      <Navbar
        bg="light"
        expand="lg"
        style={{ width: "100%", position : "fixed" }}
      >
        <Navbar.Brand href="#home">The Witcher Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="series">Serii</Nav.Link>
            <NavDropdown title="Wiki" id="basic-nav-dropdown">
              <NavDropdown.Item href="arme">Arme</NavDropdown.Item>
              <NavDropdown.Item href="armuri">Armuri</NavDropdown.Item>
              <NavDropdown.Item href="bestiar">Bestiar</NavDropdown.Item>
              <NavDropdown.Item href="caractere">Caractere</NavDropdown.Item>
              <NavDropdown.Item href="semne">Semne</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContentContainer>
        <AppContent>{children}</AppContent>
      </AppContentContainer>
    </AppContainer>
  );
}

export default AppLayout;
