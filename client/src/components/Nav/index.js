import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import logo from '../../assets/bunos-background-transparent.png';

function Nav() {
  function showNavigation1() {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/menu">
            Menu
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/team">
            Team
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    )
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  } 

  return (
    <header className="flex-row px-1">

      <img className="header-logo" src={logo}/>

      <h1>Buono's Pizza Gilbert</h1>
      <nav>
        {showNavigation()}
      </nav>

      <nav>
        {showNavigation1()}  
      </nav>

    </header>
  );
}

export default Nav;