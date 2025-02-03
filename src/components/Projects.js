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
    descriptionShort: "The website you are currently reading, which showcases my professional skills and background.",
    descriptionLong: [
      "Fully-responsive static website written with React and Bootstrap",
      "Showcases my web development skills and provides information about my academic and professional background",
      "User-friendly interface to retain the reader's attention",
    ],
  },
  {
    id: 1,
    title: "Roommate Helper",
    url: "https://github.com/ryanchowdev/RoommateHelper",
    technologies: [
      "Python"
    ],
    descriptionShort: "A chat bot for the Discord messaging app which helps roommates manage their shared living environment.",
    descriptionLong: [
      "Chat bot for Discord written with Python",
      "Led a team of five developers to create this project, using SCRUM practices",
      "Designed as an assistant to help roommates manage various tasks, such as ...",
      "Notify users to perform scheduled tasks",
      "Monetary system for tracking expenses and debt",
      "Alarm system for household or other important events",
      "... and more",
    ],
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
    descriptionLong: [
      "Dynamic website written with Py4web, Vue.js, and Bulma",
      "Collaborated a team of five developers to create this project",
      "Enables users to practice investing in the stock market without risking real money",
      "Some features included ...",
      "Simulated stock market behavior",
      "Login system",
      "Stock trading",
      "Portfolio building",
      "Charts to track portfolio performance as well as historical stock prices",
      "Forum to discuss with other users",
      "... and more",
    ],
  },
  {
    id: 3,
    title: "Bread & Thyme Website",
    url: "https://github.com/ryanchowdev/website-bread-and-thyme",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    descriptionShort: "A website designed for a bakery", // designed with UI in mind... something like this
    descriptionLong: [
      "Fully-responsive static website written with HTML, CSS, and JavaScript",
      "Worked together with a team of three developers",
      "Focused on design aspect to make website visually appealing and easy to navigate for potential customers",
      "Used Figma to plan the layout of the site, as well as how we wanted page elements to appear",
      "Developed website based on client's feedback and vision",
    ],
  },
  {
    id: 4,
    title: "UCSC Class Check",
    url: "https://github.com/ryanchowdev/UCSC-ClassCheck",
    technologies: [
      "Python"
    ],
    descriptionShort: "A web scraper which checks the availability of classes at UCSC",
    descriptionLong: [
      "Web scraper written with Python",
      "Used Beautiful Soup library for scraping",
      "Used Tkinter to create easy-to-use GUI",
      "Useful for UCSC students to quickly enroll in popular classes before others",
      "Personally used this application to be notified when a space became available in classes that I hoped to join",
    ],
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
        {/* TODO limit width here?
            w-50, w-75 causes cards to overlap on smaller window */}
        <h1>Projects</h1>
        <p>Here are some of the projects I've made in this past.</p>
        <p>Click on any project to learn more about it!</p>
        {/* Display projects, 2 per row */}
        {/* TODO Possibly change to image on card, then description to the side, only 1 project per row */}
        <div className="row">
          {
            projects.map((project) =>(
              <React.Fragment key={project.id}>
                {/* Card */}
                <div className="col-12 col-md-6 my-3">
                  {/* 
                    For devices >= 768px: 2 columns per row at 50% width (col-md-6) (can also try col-md-4 to have 3 columns per row)
                    For smaller devices, 1 column per row at 100% width (size 12)
                    TODO Make boxes skinnier (maybe square shaped?)
                    Increase height of this section if needed?
                    Make size of every box consistent instead of depending on the amount of text?
                    TODO Make contents of every section closer together (skinnier)
                    try text-lg-center, text-xl-center, text-xxl-center
                  */}
                  {/* 
                  width: "18rem"
                  style={{width: '18rem'}}
                  w-100 is same as width: "100%"
                  w-50 looks good on desktop but bad on mobile, w-100 might be too big for desktop
                  */}
                  {/* Trigger modal when clicking card */}
                  <div className="card mx-auto" style={{width: '18rem'}} data-bs-toggle="modal" data-bs-target={modalTarget({project})}>
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
                        <ul className="list-group list-group-horizontal justify-content-center">
                          {
                            project.technologies.map((technology, index) =>
                              <React.Fragment key={index}>
                                <li className="list-group-item">{technology}</li>
                              </React.Fragment>
                            )
                          }
                        </ul>
                        {/* project description */}
                        <ul className="list-group list-group-flush text-start">
                          {
                            project.descriptionLong.map((str, index) =>
                              <React.Fragment key={index}>
                                <li className="list-group-item">{str}</li>
                              </React.Fragment>
                            )
                          }
                        </ul>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
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