import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <p className="myNameNav">BriAnna</p>
      <ul className="navMenu">
        <li className="navHome">
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
