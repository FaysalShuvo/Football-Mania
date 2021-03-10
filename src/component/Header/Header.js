import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" className="justify-content-center" expand="lg">
        <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
          Football Mania
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
