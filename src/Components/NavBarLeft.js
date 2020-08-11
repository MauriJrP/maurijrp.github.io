import React from 'react';
import Logo from '../images/logo.png';
import './Styles/App.css';

class NavBarLeft extends React.Component {
  render() {
    return (
      <div className="navbar__left">
        <img src={Logo} className="logo" alt="Logo" title="Logo" />
        <h1>Portafolio</h1>
      </div>
    );
  }
}

export default NavBarLeft;
