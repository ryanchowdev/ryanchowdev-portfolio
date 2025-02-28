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
        <div className="container p-5 text-center lh-lg border-bottom" id="about">
          {/* TODO Should border-bottom be longer like in hero? Also occurs in other sections
          removed container-fluid for container 
          inconsistent position of border when jumping to section - between hero and about (below line), versus about and projects (above line)
          maybe put p-5 in each section? */}
          <h1>About Me</h1>
          <p>Learn more about my background, education, and professional skills.</p>
          {/* TODO need to work on responsiveness and overall layout here
          Error: container-fluid causes a horizontal scroll wheel to appear - too much padding or something on the sides
          Make this section taller */}
          <div className="row justify-content-center g-5">
            {/* Background */}
            <div className="col-lg-5 py-3 px-5">
              <h3>My Background</h3>
              <p>
                {/* TODO fix wording
                maybe add something about being born and raised in SF Bay Area, etc */}
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
            {/* Skills */}
            <div className="col-lg-5 py-3 px-5">
              <h3>My Skills</h3>
              <br/>
              {/* TODO 
                  put more space/padding between sections
                  make these different colors?
                  maybe add some images? */}
              {/* Display skills */}
              {
                skills.map((skill) =>(
                  <React.Fragment key={skill.id}>
                    <div>
                      <h5>{skill.category}</h5>
                      {/* TODO pick a secondary color scheme to use throughout the page -
                          can be blue, green, purple, etc 
                          change all buttons to this color 
                          make buttons appear like boxes, cannot interact with them */}
                      {
                        skill.items.map((item, index) =>
                          <div className="d-inline-flex p-1">
                            <button type="button" className="btn btn-outline-primary" style={{pointerEvents: "none"}}>
                              <React.Fragment key={index}>
                                {item}
                              </React.Fragment>
                            </button>
                          </div>
                        )
                      }
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