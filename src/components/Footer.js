// /src/components/Footer.js
function Footer () {
  return (
    <footer className="mt-5">
      <div className="container p-4 text-center lh-lg aero-glass" id="footer">
        <div className="row align-items-center">
          {/* Info */}
          <div className="col">
            <p className="mb-2">&copy; {new Date().getFullYear()} Ryan Chow. All rights reserved.</p>
          </div>
          {/* Socials */}
          <div className="col">
            <ul className="nav justify-content-center gap-3 gap-md-4 gap-lg-5">
              <li className="nav-item">
                <a href="https://github.com/ryanchowdev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/ryanchowdev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="mailto:ryanchowdev@gmail.com" className="btn btn-danger">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
