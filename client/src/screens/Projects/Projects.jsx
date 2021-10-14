import React from "react"
import "./Projects.css"
import MuayThaiPicture from "../../assets/muay-thai-guy.png"
export default function Projects() {
  return (
    <div className="project-container">
      <div className="projects">
        <div className="project-screenshot">
          <a className="anchor" href="https://muay-thai-guy.netlify.app/">
            <img className="screenshot" src={MuayThaiPicture} alt="project1" />
          </a>
        </div>
        <div className="project-info">
          <p className="project-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            assumenda ratione totam iste suscipit nulla fugit facere
            exercitationem ex atque harum, repellat voluptas
          </p>
        </div>
      </div>
      <div className="projects">
        <div className="project-screenshot">
          <img src="" alt="project1" />
        </div>
        <div className="project-info">
          <p className="project-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            assumenda ratione totam iste suscipit nulla fugit facere
            exercitationem ex atque harum, repellat voluptas
          </p>
        </div>
      </div>
      <div className="projects">
        <div className="project-screenshot">
          <img src="" alt="project1" />
        </div>
        <div className="project-info">
          <p className="project-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            assumenda ratione totam iste suscipit nulla fugit facere
            exercitationem ex atque harum, repellat voluptas
          </p>
        </div>
      </div>
    </div>
  )
}
