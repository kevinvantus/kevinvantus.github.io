import about from "./about.ts";
import header from "./header.ts";
import navbar from "./navbar.ts";
import projects from "./projects.ts";
import skills from "./skills.ts";
import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${navbar}
  <main>
    ${header}
    ${about}
    ${skills}
    ${projects}
  </main>
  <footer>&copy; ${new Date().getFullYear()}</footer>
`;
