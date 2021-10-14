import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo"></div>
      <div className="links">
        <Link className="link" to="/projects">
          Projects
        </Link>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://drive.google.com/file/d/1P8RF_95w1scBzME44lJOWassQLOeGs_P/view?usp=sharing"
        >
          Resume
        </a>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}
