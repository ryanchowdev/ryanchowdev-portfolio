function Hero () {
    return (
        <div className="container-fluid p-5 text-center" id="hero">

          {/* CENTERED HERO */}
          <div className="px-4 py-5 my-5 text-center border-bottom vh-100">
            <img className="d-block mx-auto mb-4" src="" alt="Profile pic" width="300" height="300"/>
            <h1 className="display-5 fw-bold">Hi, I'm Ryan Chow</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Software Engineer Intern at Bytenet Solutions.
                Recently graduated from University of California, Santa Cruz with a B.S. in Computer Science.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a class="btn btn-primary btn-lg px-4 gap-3" href="#about" role="button">About Me</a>
                {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">About Me</button> */}
                {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
              </div>
            </div>
          </div>

          {/* RESPONSIVE LEFT-ALIGNED HERO WITH IMAGE 
          img-fluid
          justify-content-md-start */}
          {/* <div className="container col-xxl-8 px-4 py-5 border-bottom">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="" className="d-block mx-lg-auto" alt="Profile pic" width="300" height="300" loading="lazy"/>
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm Ryan Chow</h1>
                <p className="lead">
                  Software Engineer Intern at Bytenet Solutions.
                  Recently graduated from University of California, Santa Cruz with a B.S. in Computer Science.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-sm-center">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">About Me</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
              </div>
            </div>
          </div> */}

        </div>
    );
}

export default Hero;