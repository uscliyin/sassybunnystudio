// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img src="/Header/Header_Transparent.png" alt="Go to Home" style={{ cursor: 'pointer' }} />
      </Link>
    </div>
  );
}

export default Header;