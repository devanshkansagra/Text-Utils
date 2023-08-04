import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

    let [theme, setTheme] = useState();

    let body = document.body;
    function chToDark() {
        theme = body.setAttribute("data-bs-theme","dark");
        props.showAlert(" Changed to Dark Mode", "success");
        setTheme(theme);
    }
    function chToLight() {
        theme = body.setAttribute("data-bs-theme","light");
        props.showAlert(" Changed to Light Mode", "success");
        setTheme(theme)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Change Theme
                                </a>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" href="/" onClick={chToLight}>Light</button></li>
                                    <li><button className="dropdown-item" href="/" onClick={chToDark}>Dark</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propsTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Text-Utils"
}