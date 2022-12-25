import React from "react";
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-5">
          
          
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link text-m" aria-current="page" exact to="/" style={{
                  fontSize:"20px"}}>
                  Home
                </NavLink>
             </li>
            </ul>        
            <Link type="button" class="btn btn-light border shadow text-dark" to="/users/add"><i class="fas fa-user-plus mx-2 text-dark" id="na"></i>Add User</Link>
    
        </div>
      </nav>
    </>
  );
};

