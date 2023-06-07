import LifestaliaAdmin from "./assets/projects/lifestalia-admin.png";
import Lifestalia from "./assets/projects/lifestalia.png";
import Aitechma from "./assets/projects/aitechma.png";
import TymsBook from "./assets/projects/tymsbook.png";
import TymsMoney from "./assets/projects/tymsmoney.png";
import Bintin from "./assets/projects/bintin.png";

const projectsList = [
  {
    title: "Tyms Money",
    image: TymsMoney,
    link: "https://ajo-customer-web-v2.web.app/",
  },
  {
    title: "Lifestalia Admin Dashboard",
    image: LifestaliaAdmin,
    link: "https://lifestalia-admin.web.app/",
  },
  {
    title: "Lifestalia Website",
    image: Lifestalia,
    link: "https://www.lifestalia.com/",
  },
  {
    title: "Aitechma Website",
    image: Aitechma,
    link: "https://www.aitechma.com/",
  },
  {
    title: "Tyms Book",
    image: TymsBook,
    link: "https://tymsbook-web.web.app/auth",
  },
  {
    title: "Bintin",
    image: Bintin,
    link: "https://bintin.io/",
  },
];

const renderProjects = (projects: typeof projectsList) => {
  let articles = "";

  projects.forEach((project) => {
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
