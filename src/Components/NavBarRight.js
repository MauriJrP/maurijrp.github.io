import React from 'react';

class NavBarRight extends React.Component {
  render() {
    return (
      <nav className="navbar__right">
        <ul className="navbar__ul">
          <a href="/">
            <li className="navbar__li">Principal</li>
          </a>
          <a href="#projects">
            <li className="navbar__li">Proyectos</li>
          </a>
          <a href="#contact">
            <li className="navbar__li">Contacto</li>
          </a>
        </ul>
      </nav>
    );
  }
}

export default NavBarRight;
