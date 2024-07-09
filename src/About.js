import React from "react";

const skills = [
  {
    id: 0,
    category: "Programming Languages",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "Assembly (MIPS, RISC-V)",
    ]
  },
  {
    id: 1,
    category: "Front-End",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "Bootstrap",
      "Bulma",
    ]
  },
  {
    id: 2,
    category: "Back-End",
    items: [
      "PostgreSQL",
      "Py4web",
    ]
  },
  {
    id: 3,
    category: "Tools",
    items: [
      "Git / GitHub",
      "Linux / Unix",
      "LaTeX",
    ]
  },
];

function About () {
    return (
        <div className="container-fluid text-center" id="about">
          <h1>About Me</h1>
          <p>Learn more about my background, education, and professional skills.</p>
          {/* TODO need to work on responsiveness here */}
          <div className="row align-items-start">
            {/* Background */}
            <div className="col">
              <h3>My Background</h3>
              <p>
                I'm currently working as a Software Engineer Intern at ByteNet Solutions.
                I am a full-stack developer working on building, designing, and maintaining websites for our clients.
                My recent project involved creating a website for a local bakery. This website is fully responsive
                  and designed with the company's artisan bakery aesthetic in mind.
                ... 
                I recently graduated with a BS in Computer Science from University of California, Santa Cruz. 
                I graduated with Highest Honors in the Major, earned Cum Laude and Dean's Honors, and achieved a 3.86 GPA. 
                During my time at UC Santa Cruz, I created various projects in both team environments and as an individual. 
                Some of these projects included Roommate Helper, a chat bot to help out roommates living together; 
                Stock Market Simulator, a dynamic website that provided a simulated stock market experience;
                and UCSC Class Check, a web scraper to help students enroll in popular classes that filled up quickly. 
                ... 
                I chose to pursue software engineering because ...
              </p>
            </div>
            {/* Skills */}
            <div className="col">
              <h3>My Skills</h3>
              {/* TODO make these different colors? */}
              {/* Display skills */}
              {
                skills.map((skill) =>(
                  <React.Fragment key={skill.id}>
                    {/* TODO need to center list elements */}
                    <div>
                      <h5>{skill.category}</h5>
                      <ul className="list-group list-group-horizontal">
                        {/* Get each skill */}
                        {
                          skill.items.map((item, index) =>
                            <React.Fragment key={index}>
                              <li className="list-group-item">{item}</li>
                            </React.Fragment>
                          )
                        }
                      </ul>
                    </div>
                  </React.Fragment>
                ))
              }
            </div>
          </div>
        </div>
    );
}

export default About;