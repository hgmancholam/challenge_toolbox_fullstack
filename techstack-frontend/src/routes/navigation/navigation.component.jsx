import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { ReactComponent as ToolboxLogo } from "../../assests/logo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="home">
            <ToolboxLogo className="logo" />
            FullStack Test Giovanny Manchola
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="allFiles">All Files</Nav.Link>
              <Nav.Link href="listFiles">Check one File</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );

  /*
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ToolboxLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/listFiles">
            FILES
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
  */
};

export default Navigation;
