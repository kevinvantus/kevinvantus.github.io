import LifestaliaAdmin from "./assets/projects/lifestalia-admin.webp";
import Lifestalia from "./assets/projects/lifestalia.webp";
import Aitechma from "./assets/projects/aitechma.webp";
import TymsBook from "./assets/projects/tymsbook.webp";
import AjoMoney from "./assets/projects/ajomoney.webp";
import Bintin from "./assets/projects/bintin.webp";
import AjoMoneyWebsite from "./assets/projects/ajomoney-website.webp";
import ElenasyLMS from "./assets/projects/elenasy-lms.webp";

const projectsList = [
  {
    title: "Elenasy LMS web app (Angular)",
    image: ElenasyLMS,
    link: "https://app.elenasy.com/",
  },
  {
    title: "AjoMoney web app (Angular)",
    image: AjoMoney,
    link: "https://app.ajo.money/",
  },
  {
    title: "AjoMoney website (Next JS)",
    image: AjoMoneyWebsite,
    link: "https://www.ajo.money/",
  },
  {
    title: "Lifestalia admin dashboard (Angular)",
    image: LifestaliaAdmin,
    link: "https://lifestalia-admin.web.app/",
  },
  {
    title: "Lifestalia website (Next JS)",
    image: Lifestalia,
    link: "https://www.lifestalia.com/",
  },
  {
    title: "Aitechma website (Next JS)",
    image: Aitechma,
    link: "https://www.aitechma.com/",
  },
  {
    title: "TymsBook (Angular)",
    image: TymsBook,
    link: "https://app.tyms.io/",
  },
  {
    title: "Bintin (Angular)",
    image: Bintin,
    link: "https://bintin.io/",
  },
];

const renderProjects = (projects: typeof projectsList) => {
  let articles = "";

  projects.forEach(project => {
    articles += `
      <article>
        <figure>
          <img src=${project.image} alt=${project.title} />
        </figure>
        <div>
          <h4 class="title"><a href=${project.link} target="_blank">${project.title} <i class="icon-external-link"></i></a></h4>
        </div>
      </article>
    `;
  });

  return articles;
};

const projects = `
  <section id="projects">
    <div class="container">
      <h2>Featured Projects</h2>
      
      <div class="projects-list">
        ${renderProjects(projectsList)}
      </div>
    </div>
  </section>
`;
export default projects;
