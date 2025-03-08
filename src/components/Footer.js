function Footer () {
    return (
        <footer>
            <div className="container p-4 text-center lh-lg" id="footer">
                <div className="row">
                    {/* Info */}
                    <div className="col">
                        <p>Developed by Ryan Chow with <a href="https://react.dev/">React</a> and <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
                    </div>
                    {/* Socials */}
                    <div className="col">
                        <ul className="nav justify-content-center gap-2">
                            <li className="nav-item">
                                <a href="https://github.com/ryanchowdev" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-secondary"><i className="bi bi-github"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.linkedin.com/in/ryanchowdev/" target="_blank" rel="noopener noreferrer" className="btn btn-large btn-primary"><i className="bi bi-linkedin"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="mailto:ryanchowdev@gmail.com" className="btn btn-large btn-danger"><i className="bi bi-envelope-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;