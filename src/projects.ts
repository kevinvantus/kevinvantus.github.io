const projectsList = [
  {
    title: "Project name",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum
    ipsum sunt temporibus voluptatem reiciendis voluptate commodi, quam officiis
    architecto veniam nisi natus fugiat, at voluptates quis debitis enim?
    Nostrum!`,
    image: "",
    link: "",
  },
  {
    title: "Project name",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum
    ipsum sunt temporibus voluptatem reiciendis voluptate commodi, quam officiis
    architecto veniam nisi natus fugiat, at voluptates quis debitis enim?
    Nostrum!`,
    image: "",
    link: "",
  },
  {
    title: "Project name",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum
    ipsum sunt temporibus voluptatem reiciendis voluptate commodi, quam officiis
    architecto veniam nisi natus fugiat, at voluptates quis debitis enim?
    Nostrum!`,
    image: "",
    link: "",
  },
  {
    title: "Project name",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum
    ipsum sunt temporibus voluptatem reiciendis voluptate commodi, quam officiis
    architecto veniam nisi natus fugiat, at voluptates quis debitis enim?
    Nostrum!`,
    image: "",
    link: "",
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
          <h4 class="title"><a href="#">${project.title}</a></h4>
          <p class="description">${project.description}</p>
        </div>
      </article>
    `;
  });

  return articles;
};

const projects = `
  <section id="projects">
    <div class="container">
      <h2>Projects</h2>
      
      <div class="projects-list">
        ${renderProjects(projectsList)}
      </div>
    </div>
  </section>
`;
export default projects;
