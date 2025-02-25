function Footer () {
    return (
        <footer>
            {/* TODO put some divider here 
            removed container-fluid for container */}
            <div className="container p-5 text-center lh-lg" id="footer">
                <div className="row">
                    <div className="col">
                        <h3>Ryan Chow</h3>
                        <p>1-2 sentences about me</p>
                    </div>
                    <div className="col">
                        <h3>Social</h3>
                        {/* TODO work in progress */}
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a href="https://github.com/ryanchowdev" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-secondary"><i className="bi bi-github"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.linkedin.com/in/ryanchowdev/" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-primary"><i className="bi bi-linkedin"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="mailto:ryanchowdev@gmail.com" className="btn btn-large btn-info"><i className="bi bi-envelope-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;