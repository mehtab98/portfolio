import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <div className="nav_align">
        <Nav.Item className="nav_items">
          <Link className="Title" to="/">
            Mehtab Develops
          </Link>
        </Nav.Item>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item className="nav_items">
            <Nav.Link>
              <Link to="/portfolio" className="linkStyle">
                Portfolio
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav_items">
            <Nav.Link>
              <Link className="linkStyle" to="/resume">
                Resume
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav_items">
            <Nav.Link>
              <Link className="linkStyle" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
