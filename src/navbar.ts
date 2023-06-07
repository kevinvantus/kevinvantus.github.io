const navbar = `
  <nav>
    <ul>
      <li><a href="#about" tabindex="1">about</a></li>
      <li><a href="#skills" tabindex="1">skills</a></li>
      <li><a href="#projects"  class=${
        location.hash === "#projects" ? "active" : ""
      }>projects</a></li>
    </ul>
  </nav>
`;

// window.addEventListener("load", (_) => {
//   const links = [...document.querySelectorAll("nav a")] as HTMLAnchorElement[];

//   const activeLink = links.find((link) => link.hash === location.hash);
//   activeLink?.classList.add("active");
// });

// window.addEventListener("hashchange", (_) => {
//   const links = [...document.querySelectorAll("nav a")] as HTMLAnchorElement[];

//   [...links].forEach((link) => {
//     const isMatch = link.hash === location.hash;

//     if (!link.classList.contains("active") && isMatch) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   });
// });

export default navbar;
