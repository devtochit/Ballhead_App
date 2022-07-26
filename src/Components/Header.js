import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';
import spaceLogo from '../images/space-logo.png';

const Header = () => (
  <nav>
    <div className="header-section">
      <div className="logo">
        <img className="logo-img" src={spaceLogo} alt="logo" />
        <h1>Space Travelers' Hub</h1>
      </div>
      <ul className="myLinks">
        <li>
          <NavLink to="/" className="rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/mission" className="mission">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
