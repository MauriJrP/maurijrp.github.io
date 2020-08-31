import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ ----- images ----- ------ ------- --------
import hmtl from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import git from '../images/git.png';
// import github from '../images/github.png';
import mysql from '../images/mysql.png';
import react from '../images/react.png';

// -------- ------- ------ -----  ----- ------ ------- --------
class Stack extends React.Component {
  render() {
    return (
      <div className="stack">
        <h2>Tecnologías</h2>
        <div className="stack__technologies">
          <img src={hmtl} alt="html" className="stack__photo" title="html" />
          <img src={css} alt="css" className="stack__photo" ttitle="css" />
          <img
            src={js}
            alt="javaScript"
            className="stack__photo"
            title="javaScript"
          />
          <img src={git} alt="git" className="stack__photo" ttitle="git" />
          <img
            src={mysql}
            alt="mysql"
            className="stack__photo"
            ttitle="mySql"
          />
          <img
            src={react}
            alt="react"
            className="stack__photo"
            ttitle="react"
          />
        </div>
      </div>
    );
  }
}

export default Stack;
