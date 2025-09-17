// /src/components/About.js
import React from "react";

const skills = [
  {
    id: 0,
    category: "Programming Languages",
    items: ["Python", "C", "C++", "Java", "Assembly (MIPS, RISC-V)"]
  },
  {
    id: 1,
    category: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Bootstrap", "Bulma"]
  },
  { 
    id: 2, 
    category: "Back-End", 
    items: ["PostgreSQL", "SQLite", "Py4web"]
  },
  { 
    id: 3, 
    category: "Tools", 
    items: ["Git / GitHub", "Linux / Unix", "LaTeX", "Figma", "Microsoft Office suite"] 
  },
  {
    id: 4,
    category: "Operating Systems",
    items: ["Windows", "MacOS", "Linux", "UNIX"]
  },
];

function About () {
  return (
    <div className="container py-5" id="about">
      <div className="aero-glass aero-pad text-center lh-lg reveal">
        <h1>About Me</h1>
        <p>Learn more about my background, education, and professional skills.</p>

        <div className="row justify-content-center g-4 gx-lg-5 gx-xl-6 gx-xxl-7 mt-2">
          {/* Background */}
          <div className="col-lg-5 py-3 px-4 aero-glass reveal">
            <h3>My Background</h3>
            <p className="mb-0">
              <br/>
              I'm currently working towards my <b>M.S. in Computer Science</b> at San Jose State University.
              At SJSU, I am interested in getting involved with research related to <b>artificial intelligence</b>, <b>machine learning</b>, and <b>cyber security</b>.
              To explore these interests, I'm working on projects with the <b>AI/ML Club</b> and <b>Cyber Intelligence & Security Club</b>.
              <br/><br/>
              I previously worked as a <b>Software Engineer Intern</b> at ByteNet Solutions.
              As a full-stack developer, I designed and built websites for multiple clients.
              I also helped with testing various projects for functionality, usability, and security.
              <br/><br/>
              I earned my <b>B.S. in Computer Science</b> from University of California, Santa Cruz with a 3.86 GPA. 
              I received multiple awards for my excellent academic performance, including <b>Cum Laude</b>, <b>Highest Honors in the Major</b>, and <b>Dean's Honors</b>.
              During my time at UC Santa Cruz, I created various projects in both team environments and as an individual, which you can check out below in the <a href="#projects">Projects</a> section.
              <br/><br/>
              I enjoy software engineering because I am constantly learning and improving my skills with the latest technology.
              If you would like to contact me, feel free to reach out in the <a href="#contact">Contact</a> section below, 
              or connect with me on <a href="https://www.linkedin.com/in/ryanchowdev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              <br/><br/>
            </p>
          </div>

          {/* Desktop-only spacer */}
          <div className="col-lg-1 d-none d-lg-block" aria-hidden="true"></div>
          
          {/* Skills */}
          <div className="col-lg-5 py-3 px-4 aero-glass reveal">
            <h3>My Skills</h3>
            <br/>
            {skills.map((skill) => (
              <React.Fragment key={skill.id}>
                <div className="mb-4">
                  <h5>{skill.category}</h5>
                  {skill.items.map((item, index) => (
                    <div className="d-inline-flex mb-1 p-1" key={index}>
                      <button type="button" className="btn btn-outline-primary rounded-pill" style={{ pointerEvents: "none" }}>
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
