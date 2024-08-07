import React from "react";

/*
  imageUrl - image to display on the card
  galleryUrl - maybe link to a gallery which has screenshots of the project in action
  siteUrl - maybe link to the actual site if it's going to be hosted
*/
const projects = [
  {
    id: 0,
    title: "Personal Portfolio",
    url: "https://github.com/ryanchowdev/ryanchowdev-portfolio",
    technologies: [
      "React",
      "Bootstrap"
    ],
    descriptionShort: "The website you are currently reading",
    descriptionLong: "\
      Personal Portfolio is a fully-responsive static website written with React and Bootstrap.\
      It showcases my web development skills and provides information about my professional background.\
      ...\
      ",
  },
  {
    id: 1,
    title: "Roommate Helper",
    url: "https://github.com/ryanchowdev/RoommateHelper",
    technologies: [
      "Python"
    ],
    descriptionShort: "A chat bot for the Discord messaging app which",
    descriptionLong: "\
      Roommate Helper is a chat bot for Discord written in Python.\
      It was designed as an assistant to help roommates manage various tasks, such as ...\
      ",
  },
  {
    id: 2,
    title: "Stock Market Imitation",
    url: "https://github.com/ryanchowdev/Stock-Market-Imitation",
    technologies: [
      "Py4web",
      "Vue.js",
      "Bulma"
    ],
    descriptionShort: "A dynamic website which provides a simulated stock market experience",
    descriptionLong: "\
      Stock Market Imitation is a dynamic website written with Py4web, Vue.js, and Bulma.\
      It allows users to ...\
      ",
  },
  {
    id: 3,
    title: "Bread & Thyme Website",
    url: "https://github.com/ryanchowdev/website-bread-and-thyme",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    descriptionShort: "A website designed for a bakery",
    descriptionLong: "\
      Bread & Thyme Website is a fully-responsive website written with HTML, CSS, and JavaScript.\
      ...\
      ",
  },
  {
    id: 4,
    title: "UCSC Class Check",
    url: "https://github.com/ryanchowdev/UCSC-ClassCheck",
    technologies: [
      "Python"
    ],
    descriptionShort: "A web scraper which checks the availability of classes at UCSC",
    descriptionLong: "\
      UCSC Class Check is a web scraper written in Python.\
      It is useful for UCSC students to quickly enroll in popular classes before others.\
      I personally found it to be extremely helpful when it was time to sign up for classes that immediately filled up.\
      When someone dropped a class I wanted, I immediately was notified and took the open spot.\
      "
  },
];

// Generate Bootstrap target for modal
function modalTarget({project}) {
  return "#modal" + project.id;
}

// Generate modal id
function modalId({project}) {
  return "modal" + project.id;
}

function Projects () {
  // just have 2 cards per row with image and description for project
  // upon clicking anywhere on the cards, a modal pops up (?)
  // put github within modal, as well as extended description, technologies used, other information, etc
  return (
      <div className="container-fluid text-center lh-lg" id="projects">
        <h1>Projects</h1>
        <p>Here are some of the projects I've made in this past.</p>
        <p>Click on any project to learn more about it!</p>
        {/* Display projects, 2 per row */}
        <div className="row">
          {
            projects.map((project) =>(
              <React.Fragment key={project.id}>
                {/* Card */}
                <div className="col-12 col-md-4">
                  {/* 
                    For devices >= 768px: 2 columns per row at 50% width (col-md-6) (can also try col-md-4 to have 3 columns per row)
                    For smaller devices, 1 column per row at 100% width (size 12)
                  */}
                  {/* 
                  width: "18rem"
                  w-100 is same as width: "100%"
                  w-50 looks good on desktop but bad on mobile, w-100 might be too big for desktop
                  */}
                  {/* Trigger modal when clicking card */}
                  <div className="card mx-auto" data-bs-toggle="modal" data-bs-target={modalTarget({project})}>
                    <img src="#" className="card-img-top" alt={project.title} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.descriptionShort}</p>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
                    </div>
                  </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id={modalId({project})} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">{project.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {/* TODO display technologies used, maybe with small boxes next to each other */}
                        {
                          project.technologies.map((technology, index) =>
                            <React.Fragment key={index}>
                              <p>{technology}</p>
                            </React.Fragment>
                          )
                        }
                        {project.descriptionLong}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
  );
}

export default Projects;