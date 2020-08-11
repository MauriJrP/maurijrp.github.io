import React from 'react';

class NavBarRight extends React.Component {
  render() {
    return (
      <nav className="navbar__right">
        <ul className="navbar__ul">
          <li className="navbar__li">Principal</li>
          <li className="navbar__li">Proyectos</li>
          <li className="navbar__li">Contacto</li>
        </ul>
      </nav>
    );
  }
}

export default NavBarRight;
