function Footer () {
    return (
        <footer>
            {/* TODO make this color contrast with background instead of staying black */}
            <div className="container-fluid p-5 bg-dark text-white text-center lh-lg" id="footer">
                <div className="row">
                    <div className="col">
                        <h3>Ryan Chow</h3>
                        <p>1-2 sentences about me</p>
                    </div>
                    <div className="col">
                        <h3>Social</h3>
                        {/* TODO work in progress */}
                        <ul className="nav">
                            <li className="nav-item">
                                <i className="bi bi-github"></i>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn btn-large btn-primary"><i className="bi bi-linkedin"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><i className="bi bi-envelope-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;