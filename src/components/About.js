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
      "Figma",
    ]
  },
];

function About () {
    return (
        <div className="container-fluid text-center lh-lg" id="about">
          <h1>About Me</h1>
          <p>Learn more about my background, education, and professional skills.</p>
          {/* TODO need to work on responsiveness and overall layout here, particularly for Skills boxes */}
          <div className="row justify-content-center g-5">
            {/* Background */}
            <div className="col-lg-5 py-3 px-5">
              <h3>My Background</h3>
              <p>
                {/* TODO fix wording */}
                <br/>
                I'm currently working as a <b>Software Engineer Intern</b> at ByteNet Solutions.
                I am a full-stack developer working on building, designing, and maintaining websites for our clients.
                Each website is fully responsive and carefully crafted based on the client's needs and feedback.
                In my present role, I am primarily focused on the front-end aspect of web development.
                <br/><br/>
                I recently graduated with a B.S. in Computer Science from University of California, Santa Cruz with Highest Honors in the Major. 
                I earned a 3.86 GPA and was recognized for my excellent academic performance by receiving Cum Laude and Dean's Honors.
                During my time at UC Santa Cruz, I also created various projects in both team environments and as an individual. 
                You can check out these projects below in the <b>Projects</b> section.  
                <br/><br/>
                I enjoy software engineering because I am constantly learning and improving my skills with the latest technology.
                If you would like to contact me, feel free to reach out in the <b>Contact</b> section below.
                <br/><br/>
              </p>
            </div>
            {/* <div className="col-lg-1"></div> */}
            {/* Skills */}
            <div className="col-lg-5 py-3 px-5">
              <h3>My Skills</h3>
              <br/>
              {/* TODO make these different colors? */}
              {/* TODO not responsive, use md, lg, etc*/}
              {/* Display skills */}
              {
                skills.map((skill) =>(
                  <React.Fragment key={skill.id}>
                    <div>
                      <h5>{skill.category}</h5>
                      <ul className="list-group list-group-horizontal">
                        {/* Get each skill */}
                        {
                          skill.items.map((item, index) =>
                            <React.Fragment key={index}>
                              <li className="list-group-item flex-fill">{item}</li>
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