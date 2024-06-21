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
                My recent project involved creating a website for a local bakery, which can be found <a href="">here</a>.
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
            </div>
          </div>
        </div>
    );
}

export default About;