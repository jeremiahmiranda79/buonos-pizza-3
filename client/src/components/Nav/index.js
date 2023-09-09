import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from '../../assets/bunos-background-transparent.png';

function Nav() {
  function showNavigation1() {
    return (
      <ul className="flex-row">
        <div className="mx-1">
          <Link to="/">
            Home
          </Link>
        </div>
        <div className="mx-1">
          <Link to="/menu">
            Menu
          </Link>
        </div>
        <div className="mx-1">
          <Link to="/about">
            About
          </Link>
        </div>
        <div className="mx-1">
          <Link to="/team">
            Team
          </Link>
        </div>
        <div className="mx-1">
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </ul>
    )
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <div className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </div>
          <div className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <div className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </div>
          <div className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </div>
        </ul>
      );
    }
  } 

  return (
    <header className="flex-row px-1">
      <img className="header-logo" src={logo}/>
      <h1>Buono's Pizza Gilbert</h1>
      <nav className='header-links-1'>
        {showNavigation()} 
      </nav>
      <nav className='header-links-2'>
        {showNavigation1()}  
      </nav>   
    </header>
  );
}

export default Nav;