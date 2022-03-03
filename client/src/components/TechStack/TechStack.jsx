import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './TechStack.css';

const TechStack = () => (
  <div className='tech-stack'>
    <div className='tech-stack-list'>
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
      <div className='carousel-slides'>
        <p className='tech'>
          Primary Focus <br /> MERN STACK
        </p>
      </div>
      <div className='carousel-slides'>
        <p className='tech'>HTML5 | CSS3</p>
      </div>
      <div className='carousel-slides'>
        <p className='tech'>
          Some experience with: <br /> Ruby on Rails
        </p>
      </div>
      <div className='carousel-slides'>
        <p className='tech'>Firebase</p>
      </div>
    </Carousel>
  </div>
);

export default TechStack;
