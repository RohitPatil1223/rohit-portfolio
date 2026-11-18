import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./NavbarComponent";
import Banner from "./Banner";
import './App.css' ;
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
