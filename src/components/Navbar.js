import React from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <img
          src="favicon-32x32.png"
          alt="Logo"
          width="30"
          height="30"
          className="margin d-inline-block align-text-top"
        />
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn btn-outline-dark text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="submit"
            >
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-1"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              Dark mode{" "}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//pts = PropTypes.string
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired, //isRequired is used so that we have to set the title values otherwise it will show an error
//   aboutText: PropTypes.string
// }

//pts = PropTypes.string
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

//Navbar default props
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
