import React from "react";
import Logo from "../images/logo.svg";

const Header = () => (
  <header>
    <div className="nav container">
      <nav>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>

      <div className="login-signup">
        <a href="#">Login</a>
        <a className="btn" href="#">
          Sign Up
        </a>
      </div>
    </div>
  </header>
);

export default Header;
