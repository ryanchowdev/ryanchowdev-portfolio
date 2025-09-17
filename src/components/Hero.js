//  /src/components/Hero.js
import profilePic from "../assets/ryan-profile.jpg";

function Hero () {
  return (
    <div className="container-fluid text-center lh-lg" id="home">
      {/* Centered hero section */}
      <div className="d-flex align-items-center justify-content-center text-center vh-100">
        <div className="aero-glass aero-pad d-inline-block reveal">
          {/* Profile picture */}
          <img className="d-block mx-auto mb-4 rounded-circle img-fluid" src={profilePic} style={{width: "19rem"}} alt="Ryan's profile pic"/>
          {/* Description */}
          <h1 className="display-5 fw-bold">Hi, I'm Ryan Chow</h1>
          <div className="col-lg-8 mx-auto">
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
