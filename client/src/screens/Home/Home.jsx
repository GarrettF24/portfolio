import React from "react"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"
import AboutMe from "../../components/AboutMe/AboutMe"
import TechStack from "../../components/TechStack/TechStack"
import Headshot from "../../assets/headshot.jpg"
import "./Home.css"

export default function Home() {
  return (
    <div id="home-route" className="home-container">
      <img
        className="headshot-img"
        style={{}}
        src={Headshot}
        alt="construction-sign"
      />
      <div className="about-me-section">
        <AboutMe />
      </div>
      <div className="tech-stack-section">
        <TechStack />
      </div>
      <div id="project-route" className="projects-section">
        <Projects />
      </div>
      <div id="contact-route" className="contact-section">
        <Contact />
      </div>
    </div>
  )
}
