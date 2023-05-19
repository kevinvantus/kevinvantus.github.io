const navbar = `
  <nav>
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#about" class=${
        location.hash === "#about" ? "active" : ""
      }>about</a></li>
      <li><a href="#skills"  class=${
        location.hash === "#skills" ? "active" : ""
      }>skills</a></li>
      <li><a href="#projects"  class=${
        location.hash === "#projects" ? "active" : ""
      }>projects</a></li>
    </ul>
  </nav>
`;

export default navbar;
