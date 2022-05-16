import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/camera.png"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} width="75px"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/conoce">Conoce</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prueba">Prueba</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Adquiere</Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link">AAAA</button>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}