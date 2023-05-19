import header from "./header.ts";
import navbar from "./navbar.ts";
import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${navbar}
  ${header}
  <main>
    
  </main>
`;
