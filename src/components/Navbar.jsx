import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/features">Features</Link>
                            </li>
                        </ul>
                        <div className={` mx-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
