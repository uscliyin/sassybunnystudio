import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Navbar.scss"
function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    return (
      <div className="navbar">
        <div className="center">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          
          {/* <div className="item" onClick={toggleDropdown}>
          <Link className="link" to="#">Categories</Link>
          <KeyboardArrowDownIcon className="icon" />
          {dropdownVisible && (
            <div className="dropdown">
              <Link className="dropdown-link" to="/almond">Almond</Link>
              <Link className="dropdown-link" to="/square">Square</Link>
              <Link className="dropdown-link" to="/coffin">Coffin</Link>
              <Link className="dropdown-link" to="/stilleto">Stilleto</Link>
            </div>
          )}
        </div> */}
        <div className="item">
            <Link className="link" to="/Promotion">Promotion</Link>
          </div>
          <div className="item">
            <Link className="link" to="/Instruction">Instruction</Link>
          </div>
        </div>
      </div>
    );
  }

export default Navbar;