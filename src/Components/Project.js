import React, { Component } from 'react';

export class Project extends Component {
  render() {
    return (
      <a href={this.props.href} className="projects__card">
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="projects__img"
        />
        <div className="projects__description">
          <p className="projects__p">{this.props.description}</p>
        </div>
      </a>
    );
  }
}

export default Project;
