import "./Hero.css";

function Hero() {
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
        <button className="basketball" type="button">Take A Shot</button>
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
