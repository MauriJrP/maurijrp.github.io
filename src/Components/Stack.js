import React from 'react';
import './Styles/Main.css';

// -------- ------- ------ ----- images ----- ------ ------- --------
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import git from '../images/git.png';
// import github from '../images/github.png';
import mysql from '../images/mysql.png';
import react from '../images/react.png';

// -------- ------- ------ ----- Data ----- ------ ------- --------

const TECHNOLOGIES = [
  {
    name: 'html',
    alt: 'Logo html',
    src: `${html}`,
    id: 1,
    description: 'test',
  },
  { name: 'css', alt: 'Logo css', src: `${css}`, id: 2, description: 'test' },
  { name: 'js', alt: 'Logo js', src: `${js}`, id: 3, description: 'test' },
  {
    name: 'react',
    alt: 'Logo react',
    src: `${react}`,
    id: 4,
    description: 'test',
  },
  { name: 'git', alt: 'Logo git', src: `${git}`, id: 5, description: 'test' },
  {
    name: 'mysql',
    alt: 'Logo mysql',
    src: `${mysql}`,
    id: 6,
    description: 'test',
  },
];

// -------- ------- ------ ----- TechnologieInfo ----- ------ ------- --------

class TechnologieInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCloseInfo(e);
  }

  render() {
    return (
      <>
        <p className="stack__description">
          Descripcio Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente, autem! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Accusantium, in?
        </p>
        <input
          type="button"
          value="X"
          className="desactive"
          onClick={this.handleChange}
          title="Cerrar"
        />
      </>
    );
  }
}

// -------- ------- ------ ----- Component ----- ------ ------- --------
class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
      closeInfo: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseInfo = this.handleClick.bind(this);
  }

  handleClick(description) {
    if (description) {
      const img = description.target;
      this.setState({ isActive: parseInt(img.id) });
    }
  }

  handleCloseInfo() {
    this.setState({ isActive: null });
  }

  render() {
    return (
      <div className="stack">
        <h2>Tecnologías</h2>
        <div className="stack__technologies">
          {TECHNOLOGIES.map((technologie) => {
            return (
              <div
                className={
                  this.state.isActive === technologie.id ? 'active' : ''
                }
              >
                <img
                  key={technologie.id}
                  id={technologie.id}
                  src={technologie.src}
                  alt={technologie.alt}
                  className="stack__img"
                  onClick={this.handleClick}
                />
                {this.state.isActive === technologie.id && (
                  <TechnologieInfo onCloseInfo={this.handleCloseInfo} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Stack;
