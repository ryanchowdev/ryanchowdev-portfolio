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
        // TODO look into padding issues?
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Name on the left */}
                <a className="navbar-brand" href="#">Ryan Chow</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Other items on the right 
                TODO change to highlight which section is active,
                and change as you scroll down the page to a new section */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
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
                        {/* Possibly change to dropdown menu for light/dark/auto? */}
                        {/* <li className="nav-item dropdown">
                            <div className="dropdown" data-bs-theme="auto">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
                                    Color Mode
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtonLight">
                                    <li>
                                        <button type="button" className="dropdown-item" data-bs-theme-value="light" aria-pressed="false">
                                            Light
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
                                            Dark
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="dropdown-item" data-bs-theme-value="auto" aria-pressed="true">
                                            Auto
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;