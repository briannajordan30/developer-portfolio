import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="myName">Hi, Im BriAnna</p>
      <h1>Building software that connect systems and solves problems</h1>
      <p>
        Enterprise integrations, APIs, conversational AI, and a growing
        portfolio of full-stack applications
      </p>
      <a href="#projects" className="btn btn-primary">View Projects</a>
      <a href="#contact" className="btn btn-secondary">Contact Me</a>
    </section>
  );
}

export default Hero;
