import profilePic from "../assets/ryan-profile.jpg";

function Hero () {
    return (
        <div className="container-fluid text-center lh-lg" id="home">
          {/* CENTERED HERO */}
          {/* px-4 py-5 my-5 */}
          {/* TODO maybe put some animation when you load the page? */}
          <div className="d-flex align-items-center justify-content-center text-center border-bottom vh-100">
            <div className="d-inline">
              <img className="d-block mx-auto mb-4 rounded-circle img-fluid" src={profilePic} alt="Ryan's profile pic" width="300"/>
              <h1 className="display-5 fw-bold">Hi, I'm Ryan Chow</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                  Software Engineer Intern at ByteNet Solutions.
                  Recently graduated from University of California, Santa Cruz with a B.S. in Computer Science.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <a className="btn btn-primary btn-lg px-4 gap-3" href="#about" role="button">About Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Hero;