import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="about-me">
        <h3 className="about-paragraph">
          Hello! My name is Garrett and I am a software engineer. During the
          pandemic, I decided to pursue my interests and entered the software
          field. My curiosity for problem-solving and seeing how things work has
          been the driving factor in my switching careers and joining General
          Assembly’s Software Engineering Immersive. The program was a 12 week
          400+ hour course in which I created four projects, one being a team
          project. The team project showed me that I love working in a team,
          collaborating, working on code, and bouncing ideas off one another in
          a group setting makes programming even more enjoyable.
        </h3>
        <div className="tech-stack">
          <h3 className="tech-stack-list">
            My Current Tech Stack: Javascript, React, SQL, PostgreSQL, HTML,
            CSS, Ruby, Rails, and Express.
          </h3>
        </div>
      </div>
      <div className="contact">
        <div className="contact-me">
          <h2 className="home-contact-links">
            Want to work together?
            <Link to="/contact"> contact me</Link>
          </h2>
        </div>
        <div className="portfolio-link">
          <h2 className="home-contact-links">
            Take a look at my <Link to="/projects">projects</Link>
          </h2>
        </div>
      </div>
    </div>
  )
}
