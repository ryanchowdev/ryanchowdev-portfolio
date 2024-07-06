function Footer () {
    return (
        <footer>
            <div className="container-fluid p-5 bg-dark text-white text-center" id="footer">
                <h3>Ryan Chow</h3>
                <p>Footer goes here</p>
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
        </footer>
    );
}

export default Footer;