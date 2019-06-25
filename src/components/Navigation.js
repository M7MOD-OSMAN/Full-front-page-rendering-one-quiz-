import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const  Navigation= () => {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/home">Emt7ank</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">
                <NavLink className="nav-link" exact to="/home" activeStyle={{ background: 'blue'}}>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeStyle={{ background: 'blue'}}>About</NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact" activeStyle={{ background: 'blue'}}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register" activeStyle={{ background: 'blue'}}>Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeStyle={{ background: 'blue'}}>Login</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link rounded-lg" to="/quizzz" activeStyle={{ background: 'blue'}}>Exams</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navigation;