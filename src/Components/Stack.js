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
    description:
      'HTML es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.',
  },
  {
    name: 'css',
    alt: 'Logo css',
    src: `${css}`,
    id: 2,
    description:
      'Css es un lenguaje de hoja de estilos en cascada utilizado para darle estilos a un sitio web',
  },
  {
    name: 'js',
    alt: 'Logo js',
    src: `${js}`,
    id: 3,
    description:
      'JavaScript es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes, etc.',
  },
  {
    name: 'react',
    alt: 'Logo react',
    src: `${react}`,
    id: 4,
    description:
      'ReactJS es una librería JavaScript enfocada a la visualización. Nos permite el desarrollo de interfaces de usuario de forma sencilla mediante componentes interactivos y reutilizables.',
  },
  {
    name: 'git',
    alt: 'Logo git',
    src: `${git}`,
    id: 5,
    description:
      'Git es un software de control de versiones que tiene como proposito llevar registro de los cambios en archivos y cordinar el trabajo que realizan varias personas en archivos compartidos',
  },
  {
    name: 'mysql',
    alt: 'Logo mysql',
    src: `${mysql}`,
    id: 6,
    description:
      'MySQL es un sistema de gestión de base de datos relacional (RDBMS) de código abierto, basado en lenguaje de consulta estructurado (SQL).',
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
        <p className="stack__description">{this.props.description}</p>
        <i
          type="button"
          value="X"
          className="fas fa-window-close desactive"
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
                  this.state.isActive === technologie.id ? 'active' : 'stack__technologie'
                }
                key={technologie.id}
              >
                <img
                  id={technologie.id}
                  src={technologie.src}
                  alt={technologie.alt}
                  className="stack__img"
                  onClick={this.handleClick}
                />
                {this.state.isActive === technologie.id && (
                  <TechnologieInfo
                    onCloseInfo={this.handleCloseInfo}
                    description={technologie.description}
                  />
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
