import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return ( <>
<nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/welcome">Education Web</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/administrator">Administration</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admission">Admission</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/tracking">Tracking</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
};



export default Navbar