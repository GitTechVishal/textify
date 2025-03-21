import React from "react";
import PropTypes from "prop-types";
//import toggleMode from "../App";
//import { Link } from "react-router-dom";
//! Following comment line is function based component
//! and in letest version of react we have to give default props like this.
//export default function Navbar({ title = "Set Title Here", aboutText = "Set About Here" }) {

//! Following comment line is class based component
//! here we can give old default props like this.
class Navbar extends React.Component {
  render() {
    return (
      <nav
        // className=//     this.props.mode //   `navbar navbar-expand-lg navebar-${this.props.mode} bg-${ //   //! ` ` is string concatenation to use variable as template literal // {
        //   } text-${this.props.mode === "dark" ? "light" : "dark"}`
        // }
        className="navbar navbar-expand-lg navebar-dark bg-dark text-light"
      >
        <div className="container-fluid">
          {/* <Link
            className="navbar-brand"
            to="/"
            style={{ color: this.props.mode === "dark" ? "white" : "white" }}
          >
            {this.props.title}
          </Link>
           */}
          <a
            className="navbar-brand"
            href="#"
            style={{ color: this.props.mode === "dark" ? "white" : "white" }}
          >
            {this.props.title}
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
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                  style={{
                    color: this.props.mode === "dark" ? "white" : "white",
                  }}
                >
                  {this.props.aboutText}
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  link
                </a>
              </li> */}
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("primary");
                }}
                style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("danger");
                }}
                style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("success");
                }}
                style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("warning");
                }}
                style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
              ></div>
              <div
                className="bg-light rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("light");
                }}
                style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
              ></div>
              <div
                className="bg-dark rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("dark");
                }}
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  cursor: "pointer",
                  border: "2px solid white",
                }}
              ></div>
              {/* <div
                className="bg-dark rounded mx-2"
                onClick={() => {
                  this.props.toggleMode("dark");
                }}
                style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
              ></div> */}
            </div>
            {/* <div
              className={`form-check form-switch text-${
                this.props.mode === "light" ? "dark" : "light"
              }`}
            > */}
            {/* <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                //On Click need function but not function call.
                onClick={() => {
                  this.props.toggleMode(null);
                }}
              /> */}
            {/* <label
                className="form-check-label text-light"
                htmlFor="flexSwitchCheckDefault"
              > */}
            {/* {"Toggle Mode"}{" "} */}
            {/* {this.props.mode === "dark" ? "Enable Light Mode" : "Disable Light Mode"}
                {/* {this.props.mode === "dark"
                  ? "Enable Light Mode"
                  : "Disable Light Mode"} */}
            {/* </label>
            </div> */}
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Navbar.defaultProps = {
//   title: "Set Title Here",
//   aboutText: "About",
// };
export default Navbar;
