import Html from "./assets/skills/html.png";
import Css from "./assets/skills/css.png";
import JavaScript from "./assets/skills/js.png";
import TypeScript from "./assets/skills/ts.png";
import Sass from "./assets/skills/sass.png";
import Angular from "./assets/skills/angular.png";
import React from "./assets/skills/react.png";
import Node from "./assets/skills/nodejs.png";
import Express from "./assets/skills/express.png";
import MongoDB from "./assets/skills/mongodb.png";

const skills = `
  <section class="light-bg" id="skills">
    <div class="container">
      <h2>Skills</h2>

      <div class="logo-garden">
        <img src=${Html} alt="HTML" />
        <img src=${Css} alt="CSS" />
        <img src=${Sass} alt="SASS" />
        <img src=${JavaScript} alt="JavaScript" />
        <img src=${TypeScript} alt="TypeScript" />
        <img src=${React} alt="React" />
        <img src=${Angular} alt="Angular" />
        <img src=${Node} alt="Node" />
      </div>
    </div>
  </section>
        `;

// <img src=${MongoDB} alt="Mongo DB" />
// <img src=${Express} alt="Express" />
export default skills;
