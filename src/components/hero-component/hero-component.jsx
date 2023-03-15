import React from "react";
import './hero-component.styles.css'
import ParticleBackground from "../particle-background";

const Hero = () => {
    return (
      <div className="hero">
        <ParticleBackground />
        <div className="hero-content-wrapper">
          <h1 className="hero-title">Pedro Rivera</h1>
          <p className="hero-text">
            Here you will find all sorts of interesting things.
          </p>
        </div>
      </div>
    );
  };
  
  export default Hero;