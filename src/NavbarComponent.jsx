import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="btn btn-outline-secondary border-0 d-flex align-items-center gap-2"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

const NavbarComponent = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div id="navbar">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          className="brand-name"
          href="/Rohit-Patil-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Rohit Patil resume"
          title="Download Resume"
        >
          <img
            alt="My Profile Photo"
            src={
              "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
            }
            width="30"
            style={{ borderRadius: "50%" }}
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Rohit Patil
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="p-2 justify-content-center">
            <Nav.Link className="nav-link-custom" href="#Home">Home</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#Skills">Skills</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#Projects">Projects</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#Contact">Contact</Nav.Link>
            <div className="d-lg-none">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </Nav>
        </Navbar.Collapse>

        <div className="d-none d-lg-block">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;
