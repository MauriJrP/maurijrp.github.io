import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ -----  ----- ------ ------- --------
class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <h2>¿Quién Soy?</h2>
        <p className="description__text">
          Hola!{' '}
          <span role="img" aria-label="hands">
            🙌
          </span>{' '}
          soy Mauricio Rodriguez y actualmente estoy cursando tercer semestre de
          ingenieria en computacion
          <span role="img" aria-label="hands">
            💻
          </span>
          . <br />
          <span role="img" aria-label="hands">
            👨‍💻
          </span>
          Desarrollador web originario de Mexico
        </p>
      </div>
    );
  }
}

export default Description;
