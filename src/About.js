// TODO Separate into different categories
const skills = [
  'Python', 'C', 'C++', 'Java', 
  'HTML', 'CSS', 'JavaScript', 
  'React', 'Vue.js', 'Py4web', 'Bulma', 'Bootstrap',
  'PostgreSQL', 'Assembly (MIPS, RISC-V)',
  'Linux/Unix', 'Git/GitHub', 'LaTeX', 
];

function About () {
    return (
        <div className="container-fluid text-center" id="about">
          <h1>About Me</h1>
          <p>Learn more about my background, education, and professional skills.</p>
          <div className="row align-items-start">
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
            <div className="col">
              <h3>My Skills</h3>
              {/*
                Use possibly different colored bubbles to group skills
                header: languages and frameworks, tools, etc
                body: c, c++, python, html, etc
              */}
              {/* Languages and Frameworks */}
              <div className="card mx-auto" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Languages and Frameworks</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Python</li>
                  <li className="list-group-item">Java</li>
                  <li className="list-group-item">C</li>
                  <li className="list-group-item">C++</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              {/* Tools */}
              <div className="card mx-auto" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Tools</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Git</li>
                  <li className="list-group-item">Unix, Linux</li>
                  <li className="list-group-item">...</li>
                  <li className="list-group-item">...</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default About;