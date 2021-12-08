import React from "react"
import LOGO from "../../assets/portlogo.png"
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="#home-route">
          <img src={LOGO} alt="logo" />
        </a>
      </div>
      <div className="links">
        <a href="#project-route">Projects</a>
        <a href="#contact-route">Contact</a>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://drive.google.com/file/d/1P8RF_95w1scBzME44lJOWassQLOeGs_P/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
