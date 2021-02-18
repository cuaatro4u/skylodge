import React from "react";
import { Navbar } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer className="footer">
      <Navbar.Brand href="/">Sky Lounge</Navbar.Brand>
      <h6> Home | About | Contact | Menu</h6>
      <div className="social-icon">
        <span className="fa fa-facebook-square"></span>
        <span className="fa fa-instagram"></span>
        <span className="fa fa-youtube-play"></span>
      </div>
      <hr className="hr-white" />
      <p> Created By Team Cuaarto</p>
    </footer>
  );
}

export default FooterComponent;
