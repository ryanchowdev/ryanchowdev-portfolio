const projects = [
  {
    title: "Personal Portfolio",
    url: "#",
    /* imageUrl: "#" */
    description: "The website you are currently reading"
  },
  {
    title: "Roommate Helper",
    url: "https://github.com/ryanchowdev/RoommateHelper",
    description: "A chat bot for the Discord messaging app which"
  },
];

function Projects () {
  // or maybe just have 2 cards per row with image and description for project
  // upon clicking the cards, a modal pops up (?)
  return (
      <div className="container-fluid text-center" id="projects">
        <h1>Projects</h1>
        <p>Here are some of the projects I've made in this past.</p>
        {/*
          projects.map(());
        */}
        {/*
        <div className="row align-items-start">
          <div className="col">
            <p>Image on the left?</p>
          </div>
          <div className="col">
            <h3>Personal Portfolio</h3>
            <p>The website you are currently reading</p>
          </div>
        </div>
        */}
      </div>
  );
}

export default Projects;