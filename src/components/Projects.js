import React from "react";
import portfolioCover from "../assets/cover-portfolio.jpeg"; // TODO may need to retake photo if we change site home screen
import roommateHelperCover from "../assets/cover-roommate.jpg";
import stockMarketCover from "../assets/cover-stock-market.jpg";
import breadCover from "../assets/cover-bread.jpeg";
import ucscScraperCover from "../assets/cover-ucsc-scraper.jpg";

/*
  coverImg - image which will be displayed on the front of the card
  images - other images related to the project?
  galleryUrl - maybe link to a gallery which has screenshots of the project in action
  siteUrl - maybe link to the actual site if it's going to be hosted

  TODO
  maybe shorten descriptionShort to just one line and have the picture take up most of the space?
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
    descriptionShort: "This is my personal portfolio, which you are currently reading. This website showcases my professional skills and background.",
    descriptionLong: [
      "Fully-responsive static website",
      "Showcases my web development skills and provides information about my academic and professional background",
      "User-friendly interface for easy navigation",
      "Automatic light/dark mode for improved readability, with the option to toggle between modes",
    ],
    coverImg: portfolioCover,
  },
  {
    id: 1,
    title: "Roommate Helper",
    url: "https://github.com/ryanchowdev/RoommateHelper",
    technologies: [
      "Python"
    ],
    descriptionShort: "Roommate Helper is a chat bot for the Discord messaging app, which helps roommates manage their shared living environment and responsibilities.",
    descriptionLong: [
      "Chat bot for the Discord messaging app",
      "Led a team of five developers to create this project, using SCRUM practices",
      "Designed as an assistant to help roommates manage various tasks, such as ...",
      "Notify users to perform scheduled tasks",
      "Monetary system for tracking expenses and debt",
      "Alarm system for household or other important events",
      "... and more",
    ],
    coverImg: roommateHelperCover,
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
    descriptionShort: "Stock Market Imitation is a dynamic website which provides a simulated stock market experience for users to practice investing without risking real money.",
    descriptionLong: [
      "Dynamic website created in collaboration with a team of five developers",
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
    coverImg: stockMarketCover,
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
    descriptionShort: "This static website was created for Bread & Thyme bakery to enhance their online presence and attract new customers.",
    descriptionLong: [
      "Fully-responsive static website, created with a team of two developers",
      "Focused on UI/UX design to make website visually appealing and easy to navigate for potential customers",
      "Excellent learning experience which strengthened my front-end development skills",
      "Used Figma to plan the layout of the site, as well as how we wanted page elements to appear",
      "Developed website based on client's feedback and vision",
    ],
    coverImg: breadCover,
  },
  {
    id: 4,
    title: "UCSC Class Check",
    url: "https://github.com/ryanchowdev/UCSC-ClassCheck",
    technologies: [
      "Python"
    ],
    descriptionShort: "UCSC Class Check is a web scraper which checks the availability of classes at UCSC, allowing one to quickly enroll in filled classes when a spot opens up.",
    descriptionLong: [
      "Web scraper built with Python's Beautiful Soup library",
      "Used Tkinter library to create an easy-to-use GUI",
      "Useful for UCSC students to quickly enroll in popular classes before others",
      "Personally used this application to be notified when a space became available in classes that I hoped to join",
    ],
    coverImg: ucscScraperCover,
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
  // TODO removed container-fluid for container - keep?
  // TODO watch out for overlapping sections - use inspect element
  // TODO put some more clear indication that you can click on the boxes - maybe put animation on box when you hover over it
  return (
      <div className="container p-5 text-center lh-lg border-bottom" id="projects">
        <h1>Projects</h1>
        <p>Here are some of the projects I've made in this past.</p>
        <p>Click on any project to learn more about it!</p>
        {/* Display projects, 2 per row */}
        {/* TODO Possibly change to image on card, then description to the side, only 1 project per row 
        Maybe make cards bigger? */}
        <div className="row">
          {
            projects.map((project) =>(
              <React.Fragment key={project.id}>
                {/* Card */}
                <div className="col-12 col-md-6 my-3">
                  {/* 
                    For devices >= 768px: 2 columns per row at 50% width (col-md-6) (can also try col-md-4 to have 3 columns per row)
                    For smaller devices, 1 column per row at 100% width (size 12)
                    TODO Increase height of this section if needed?
                    Make size of every box consistent instead of depending on the amount of text?
                  */}
                  {/* 
                  width: "18rem"
                  style={{width: '18rem'}}
                  w-100 is same as width: "100%"
                  w-50 looks good on desktop but bad on mobile, w-100 might be too big for desktop
                  */}
                  {/* Trigger modal when clicking card */}
                  <div className="card mx-auto" style={{width: '18rem'}} data-bs-toggle="modal" data-bs-target={modalTarget({project})}>
                    {/* Project cover image */}
                    {/* TODO Maybe enlarge image when clicked so user can see in better detail? */}
                    <img loading="lazy" src={project.coverImg} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.descriptionShort}</p>
                      {/* TODO clicking github link also opens modal */}
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><i className="bi bi-github"></i> Github</a>
                    </div>
                  </div>
                </div>
                {/* TODO Modal - use xl, try lg? */}
                <div className="modal fade" id={modalId({project})} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">{project.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {/* TODO maybe image carousel here if we want to add more images later? */}
                        {/* TODO put large image here */}
                        <img loading="lazy" src={project.coverImg} className="w-100" alt={project.title} />
                        {/* TODO display technologies used, maybe with small boxes next to each other */}
                        {/* <ul className="list-group list-group-horizontal justify-content-center mt-4 mb-1">
                          {
                            project.technologies.map((technology, index) =>
                              <React.Fragment key={index}>
                                <li className="list-group-item">{technology}</li>
                              </React.Fragment>
                            )
                          }
                        </ul> */}
                        {/* TODO use boxes instead of horizontal list? */}
                        {
                          project.technologies.map((technology, index) =>
                            <div className="d-inline-flex mt-4 mb-1 p-1">
                              <button type="button" className="btn btn-outline-primary" style={{pointerEvents: "none"}}>
                                <React.Fragment key={index}>
                                  {technology}
                                </React.Fragment>
                              </button>
                            </div>
                          )
                        }
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