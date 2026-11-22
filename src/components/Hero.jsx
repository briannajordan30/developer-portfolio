import "./Hero.css";
import { useState } from "react";

function Hero() {
  const [shotCount, setShotCount] = useState(0);
  function incrementShotCount() {
    setShotCount((previousCount) => previousCount + 1);
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">Athlete × Creative × Developer</p>
        <h1 className="hero-title">
          Built to
          <br />
          <span className="hero-accent">evolve.</span>
        </h1>

        <p className="hero-description">
          Software engineering student. Integration professional. Naturally
          curious, creatively driven, and always building.
        </p>
      </div>
      <div className="hero-visual">
        <button
          className="basketball"
          type="button"
          onClick={incrementShotCount}
        >
          <span className="basketball-label">Take A Shot</span>
        </button>
        <p className="basketball-shot-count">Shots: {shotCount}</p>
      </div>

      <a href="#projects" className="btn btn-primary">
        View Projects
      </a>
      <a href="#contact" className="btn btn-secondary">
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
