// Toggle between light and dark themes
function toggleTheme() {
  let currTheme = document.documentElement.getAttribute('data-bs-theme');
  // Switch to opposite of current theme
  if (currTheme === 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }
  else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }
  return;
}

// Navbar
function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Name on the left */}
                <a className="navbar-brand" href="#home">Ryan Chow</a>
                {/* Button for mobile controls */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Page sections on the right - underline active section */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-underline ms-auto mb-2 mb-lg-0">
                        {/* Sections */}
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        {/* Divider */}
                        <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2"></div>
                            <hr className="d-lg-none my-2"></hr>
                        </li>
                        {/* Button to toggle Light/Dark mode */}
                        <li className="nav-item">
                            <button type="button" className="btn" onClick={toggleTheme}>
                                <i className="bi bi-sun-fill"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;