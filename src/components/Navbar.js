// Toggle between light and dark themes
function toggleTheme() {
  // Log which theme is active
  console.log(document.documentElement.getAttribute('data-bs-theme'));
  if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
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
        // TODO fix padding here
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Name on the left */}
                <a className="navbar-brand" href="#">Ryan Chow</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Other items on the right 
                TODO add AUTO button*/}
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
                        <li className="nav-item">
                            {/* Toggle Light/Dark */}
                            <button type="button" className="btn" onClick={toggleTheme}>
                                <i className="bi bi-sun-fill"></i>
                            </button>
                        </li>
                        <li className="nav-item dropdown">
                            {/* !! Replace this with a sun/moon icon */}
                            {/*
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Theme
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Light (default)</a></li>
                                <li><a className="dropdown-item" href="#">Dark</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            */}
                            <div className="dropdown" data-bs-theme="light">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
                                    Default dropdown
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtonLight">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                            {/* <div className="dropdown" data-bs-theme="dark">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dark dropdown
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtonDark">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;