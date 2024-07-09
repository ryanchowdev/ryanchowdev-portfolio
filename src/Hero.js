function Hero () {
    return (
        <div className="container-fluid p-5 bg-dark text-white text-center" id="hero">
          {/* TODO Make this bigger and stand out more */}
          {/* Image goes here */}
          <h1>Hi, I'm Ryan Chow</h1>
          <p>Software engineer located in San Francisco Bay Area, California</p>
          <a className="btn btn-primary" href="#about" role="button">About Me</a>
        </div>
    );
}

export default Hero;