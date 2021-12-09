import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./TechStack.css"

const TechStack = () => (
  <div className="tech-stack">
    <div className="tech-stack-list">
      <h3>My Current Tech Stack:</h3>
    </div>
    <Carousel
      showStatus={false}
      showIndicators={false}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
    >
      <div className="carousel-slides">
        <p className="tech">Javascript | React | Node.Js</p>
      </div>
      <div className="carousel-slides">
        <p className="tech">SQL | PostgreSQL</p>
      </div>
      <div className="carousel-slides">
        <p className="tech">HTML | CSS | Ruby | Rails |</p>
      </div>
      <div className="carousel-slides">
        <p className="tech">Express | Firebase</p>
      </div>
    </Carousel>
  </div>
)

export default TechStack
