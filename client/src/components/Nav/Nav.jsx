import React from "react"
import LOGO from "../../assets/garrett-logo-white.png"
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="#root">
          <img className="image" src={LOGO} alt="logo" />
        </a>
      </div>
      <div className="links">
        <a className="link" href="#project-route">
          Projects
        </a>
        <a className="link" href="#contact-route">
          Contact
        </a>
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
