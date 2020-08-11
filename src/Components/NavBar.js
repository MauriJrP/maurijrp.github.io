import React from 'react';
import './Styles/NavBar.css';

// -------- ------- ------ ----- Components ----- ------ ------- --------
import NavBarLeft from './NavBarLeft.js';
import NavBarRight from './NavBarRight.js';

// -------- ------- ------ -----  ----- ------ ------- --------
class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavBarLeft />
        <NavBarRight />
      </div>
    );
  }
}

export default NavBar;
