import React from "react";
import "./Header.css"; // ✅ create this file for custom styles
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="container-fluid head text-center pt-3 fw-bold shadow w-100">
        <div className="row">
            <div className="col">

      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >
              <Link to={"/"} className="text-white" id="link">Home</Link>
            {/* Home */}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >
              <Link to={"/about"} className="text-white" id="link">About</Link>
            {/* About */}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            >
              <Link to={"/contact"} className="text-white" id="link">Contact</Link>
            {/* Contact */}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-disabled"
            type="button"
            role="tab"
            aria-controls="pills-disabled"
            aria-selected="false"
            >
              <Link to={"/projects"} className="text-white" id="link">Projects</Link>
          </button>
        </li>

        {/* ✅ Dropdown with same style */}
        {/* <li className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle"
            id="pills-dropdown-tab"
            data-bs-toggle="dropdown"
            type="button"
            role="tab"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu" aria-labelledby="pills-dropdown-tab">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </li> */}
      </ul>
            </div>
        </div>
            {/* <hr /> */}
    </div>

    </>
  );
};

export default Header;
