// /src/components/Projects.js
import React from "react";
import portfolioCover from "../assets/cover-portfolio.jpeg";
import roommateHelperCover from "../assets/cover-roommate.jpg";
import stockMarketCover from "../assets/cover-stock-market.jpg";
import breadCover from "../assets/cover-bread.jpeg";
import ucscScraperCover from "../assets/cover-ucsc-scraper.jpg";

const projects = [
  {
    id: 0,
    title: "Personal Portfolio",
    url: "https://github.com/ryanchowdev/ryanchowdev-portfolio",
    technologies: ["React", "Bootstrap"],
    descriptionShort:
      "This is my personal portfolio, which you are currently reading. This website showcases my professional skills and background.",
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
    technologies: ["Python", "SQLite"],
    descriptionShort:
      "Roommate Helper is a chat bot which helps roommates manage their shared living environment and responsibilities.",
    descriptionLong: [
      "Chat bot for the Discord messaging app",
      "Led a team of five developers to create this project, using SCRUM practices",
      "Designed as an assistant to help roommates manage various household tasks",
      "Some features include:",
      "Notify users to perform scheduled tasks (track who should take out garbage, clean, do dishes, etc.)",
      "Monetary system for tracking expenses and debt",
      "Alarm system for household or other important events (house meetings, rent collection, etc.)",
      "Google Maps lookup to assist with group activities such as new dining options or shopping",
      "Weather lookup using OpenWeatherMap API",
      "...and more.",
    ],
    coverImg: roommateHelperCover,
  },
  {
    id: 2,
    title: "Stock Market Imitation",
    url: "https://github.com/ryanchowdev/Stock-Market-Imitation",
    technologies: ["Py4web", "Vue.js", "Bulma"],
    descriptionShort:
      "This dynamic website provides a simulated stock market experience for users to practice investing without risking real money.",
    descriptionLong: [
      "Dynamic website created in collaboration with a team of five developers",
      "Enables users to practice investing in the stock market without risking real money",
      "Some features include:",
      "Simulated stock market behavior",
      "Ability to buy and sell stocks",
      "Login system so users can create their own portfolios and track their performance",
      "Charts to visualize portfolio performance as well as historical stock prices",
      "Forum to discuss with other users",
      "... and more.",
    ],
    coverImg: stockMarketCover,
  },
  {
    id: 3,
    title: "Bakery Website",
    url: "https://github.com/ryanchowdev/website-bread-and-thyme",
    technologies: ["HTML", "CSS", "JavaScript"],
    descriptionShort:
      "This static website was created for Bread & Thyme bakery to enhance their online presence and attract new customers.",
    descriptionLong: [
      "Fully-responsive static website, created with a team of two developers",
      "Focused on UI/UX design to make website visually appealing and easy to navigate for potential customers",
      "Excellent learning experience which strengthened my front-end development skills",
      "Used Figma to plan the layout and design of the site for both mobile and desktop users",
      "Developed website based on client's feedback and vision",
    ],
    coverImg: breadCover,
  },
  {
    id: 4,
    title: "UCSC Class Check",
    url: "https://github.com/ryanchowdev/UCSC-ClassCheck",
    technologies: ["Python"],
    descriptionShort:
      "UCSC Class Check is a web scraper which checks the availability of classes at UCSC, allowing one to quickly enroll in filled classes when a spot opens up.",
    descriptionLong: [
      "Web scraper built with Python's Beautiful Soup library",
      "Used Tkinter library to create an easy-to-use GUI",
      "Useful for UCSC students to enroll in popular classes before others",
      "Personally used this application throughout college to be notified when a space became available in classes that I hoped to join",
    ],
    coverImg: ucscScraperCover,
  },
];

function modalTarget({ project }) {
  return "#modal" + project.id;
}
function modalId({ project }) {
  return "modal" + project.id;
}

function Projects() {
  return (
    <div className="container py-5" id="projects">
      <div className="aero-glass aero-pad text-center lh-lg reveal">
        <h1>Projects</h1>
        <p>Here are some of the projects I've made in this past.</p>
        <p>Click on any project to learn more about it!</p>

        <div className="row">
          {projects.map((project) => (
            <div className="col-12 col-lg-6 my-3 reveal" key={project.id}>
              <div
                className="project-card card mx-auto"
                style={{ width: "18rem", cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target={modalTarget({ project })}
              >
                <img loading="lazy" src={project.coverImg} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text">{project.descriptionShort}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals outside any transformed parent */}
      {projects.map((project) => {
        const id = modalId({ project });
        const labelId = `modalLabel-${project.id}`;
        return (
          <div className="modal fade" id={id} key={id} tabIndex="-1" aria-labelledby={labelId} aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content aero-glass">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={labelId}>{project.title}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  {/* Cover image */}
                  <img loading="lazy" src={project.coverImg} className="w-100 mb-3" alt={project.title} />

                  {/* Centered GitHub button */}
                  <div className="mt-2 mb-3 text-center">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-secondary">
                      <i className="bi bi-github"></i> Github
                    </a>
                  </div>

                  {/* Centered tech pills */}
                  <div className="d-flex flex-wrap justify-content-center">
                    {project.technologies.map((technology, index) => (
                      <div className="p-1" key={index}>
                        <button type="button" className="btn btn-outline-primary rounded-pill" style={{ pointerEvents: "none" }}>
                          {technology}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Left-aligned details list */}
                  <ul className="list-group list-group-flush text-start mt-3">
                    {project.descriptionLong.map((str, index) => (
                      <li className="list-group-item" key={index}>{str}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
