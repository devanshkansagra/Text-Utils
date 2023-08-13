import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
                <div className="container d-flex justify-content-between">
                    <div className="navbar-brand">{props.title}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Change Theme
                                </div>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={chToLight}>Light</button></li>
                                    <li><button className="dropdown-item" onClick={chToDark}>Dark</button></li>
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