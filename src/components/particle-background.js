import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import './particle-bg-style.css'







const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="particle-background-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#eee",
              distance: 100,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              speed: 2,
              trail: {
                enable: true,
                fillColor: "black",
                length: 5,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
          pauseOnBlur: true,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "attract",
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ParticleBackground;