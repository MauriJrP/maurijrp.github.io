import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ -----  ----- ------ ------- --------
class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <h2>¿Quién Soy?</h2>
        <p className="description__text">
          Tercer semestre de Ingenieria en Computacion, desarrollador frontend.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur
        </p>
      </div>
    );
  }
}

export default Description;
