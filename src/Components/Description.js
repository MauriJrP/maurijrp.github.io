import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ -----  ----- ------ ------- --------
class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <h2>¿Quién Soy?</h2>
        <p className="description__text">
          Hola! 🙌 soy Mauricio Rodriguez y actualmente estoy cursando tercer
          semestre de ingenieria en computacion💻. <br />
          👨‍💻Desarrollador web originario de Mexico
        </p>
      </div>
    );
  }
}

export default Description;
