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
  { id: 2, category: "Back-End", items: ["PostgreSQL", "SQLite", "Py4web"] },
  { id: 3, category: "Tools", items: ["Git / GitHub", "Linux / Unix", "LaTeX", "Figma"] },
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
              I'm currently working as a <b>Software Engineer Intern</b> at ByteNet Solutions.
              I am a full-stack developer working on building, designing, and maintaining websites for our clients.
              Each website is fully responsive and carefully crafted based on the client's needs and feedback.
              In my present role, I am primarily focused on the front-end aspect of web development.
              <br/><br/>
              I recently graduated with a B.S. in Computer Science from University of California, Santa Cruz with Highest Honors in the Major. 
              I earned a 3.86 GPA and was recognized for my excellent academic performance by receiving Cum Laude and Dean's Honors.
              During my time at UC Santa Cruz, I also created various projects in both team environments and as an individual. 
              You can check out these projects below in the <a href="#projects">Projects</a> section.  
              <br/><br/>
              I enjoy software engineering because I am constantly learning and improving my skills with the latest technology.
              If you would like to contact me, feel free to reach out in the <a href="#contact">Contact</a> section below.
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
