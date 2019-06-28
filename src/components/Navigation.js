import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


class  Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
            
              

        <div className="container">
          <Link className="navbar-brand" to="/">Emt7ank</Link>
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
                <NavLink className="nav-link rounded-lg" to="/quiz" activeStyle={{ background: 'blue'}}>Exams</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Navigation));