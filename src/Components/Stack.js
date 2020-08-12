import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ ----- images ----- ------ ------- --------
import hmtl from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import git from '../images/git.png';
import github from '../images/github.png';

// -------- ------- ------ -----  ----- ------ ------- --------
class Stack extends React.Component {
  render() {
    return (
      <div className="stack">
        <h2>Tecnologías</h2>
        <div className="stack__technologies">
          <img src={hmtl} alt="" className="stack__photo" />
          <img src={css} alt="" className="stack__photo" />
          <img src={js} alt="" className="stack__photo" />
          <img src={git} alt="" className="stack__photo" />
          <img src={github} alt="" className="stack__photo" />
        </div>
      </div>
    );
  }
}

export default Stack;
