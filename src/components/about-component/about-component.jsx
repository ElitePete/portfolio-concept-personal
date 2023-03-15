import React from "react"
import './about-component.styles.css'


const About = () => {

    return (
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
          Hi there, my name is Pedro Rivera, but most people call me Pete. I'm currently a software engineering student at South College, where I'm learning all about the fascinating world of coding. I'm particularly interested in building apps in React and expanding my knowledge of programming in general.<br /><br />

          Outside of my studies, I love to travel and explore new places. Traveling has always been a passion of mine, and it's one of the reasons why I'm so motivated to succeed in life. I've been fortunate enough to visit many beautiful destinations throughout Europe and some of the incredible national parks here in the US. Eventually I'll have a photos section with pictures of some of my destinations<br /><br />
          
          While I'm no profound expert when it comes to coding and React, I'm eager to learn more every day. I'm always up for a new challenge and enjoy pushing myself to become a better programmer. Ultimately, my goal is to use my skills to build something amazing that will have a positive impact on people's lives.
          </p>
        </div>
      );
    };


export default About