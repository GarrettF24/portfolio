import React from "react"
import "./Projects.css"
import MuayThaiPicture from "../../assets/muay-thai-guy.png"
import GJAM from "../../assets/gjam.png"
// import FITNESS from "../../assets/fitnessapp.png"
export default function Projects() {
  return (
    <div className="project-container">
      <div className="projects">
        <div className="project-screenshot">
          <a
            target="_blank"
            className="anchor"
            href="https://muay-thai-guy.netlify.app/"
            rel="noreferrer"
          >
            <img className="screenshot" src={MuayThaiPicture} alt="project1" />
          </a>
        </div>
        <div className="project-info">
          <p className="project-paragraph">
            Muay-thai-guy is a product review and blog app all rolled into one.
            This app combines my long love of muay thai with my new and growing
            love of programming. All opinions and reviews will be based off my 5
            years of expierence in Muay Thai.
          </p>
          <div className="code-links">
            <h3>
              Check out the
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/WAMS24/muay-thai-guy"
              >
                {" "}
                code
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="project-screenshot">
          <a
            target="_blank"
            className="anchor"
            href="https://gjam-app.netlify.app/"
            rel="noreferrer"
          >
            <img className="screenshot" src={GJAM} alt="project2" />
          </a>
        </div>
        <div className="project-info">
          <p className="project-paragraph">
            This is an eCommerce jam store that lets users log in with the
            option to view, create, and edit jams. Jams are stored in a database
            so that users can see jams they created and jams created by other
            users. If a user is not signed in, they will not be able to edit or
            create a jam. A shopping cart is available to logged in users so
            they can add and remove jams.
          </p>
          <div className="code-links">
            <h3>
              Check out the
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/WAMS24/gjam-app"
              >
                {" "}
                code
              </a>
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="projects">
        <div className="project-screenshot">
          <a
            target="_blank"
            className="anchor"
            href="https://garrettfitnessapp.netlify.app/"
          >
            <img className="screenshot" src={FITNESS} alt="project2" />
          </a>
        </div>
        <div className="project-info">
          <p className="project-paragraph">
            The fitness-app is a simple tool to help users with staying
            motivated with their fitness routines. One of the worst things a
            person can do when going to the gym is going without a plan. The
            fitness-app is a mobile friendly, easy to use way to plan out your
            workout for the day or week. A history section will be available to
            show your progress plus upcoming workouts. The history section will
            also be good for when users are seeking inspiration and wish to
            switch up their routines a bit.
          </p>
          <div className="code-links">
            <h3>
              Check out the
              <a target="_blank" rel="noreferrer" href="https://github.com/WAMS24/fitness-app">
                {" "}
                code
              </a>
            </h3>
          </div>
        </div>
      </div> */}
    </div>
  )
}
