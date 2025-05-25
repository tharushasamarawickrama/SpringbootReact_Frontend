import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>SBRD App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item mx-3">
              <Link className="nav-link active" aria-current="page" to={"/view-students"}>View All Student</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active"  to={"/add-students"}>Add New Student</Link>
            </li>
            
            
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
