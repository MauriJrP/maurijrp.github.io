import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ ----- Components ----- ------ ------- --------
import Foto from '../images/foto.jpg';
import Description from './Description';
import Stack from './Stack';

// -------- ------- ------ -----  ----- ------ ------- --------
class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Description />
        <div className="main__container-foto">
          <h2 className="main__name">Mauricio Rodríguez</h2>
          <img src={Foto} alt="Mauricio Rodriguez" className="main__foto" />
        </div>
        <Stack />
      </div>
    );
  }
}

export default Main;
