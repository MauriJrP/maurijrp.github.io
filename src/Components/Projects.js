import React from 'react';
import './Styles/Projects.css';
import Project from './Project.js';

// -------- ------- ------ ----- images ----- ------ ------- --------
import sintaxisBasica from '../ProyectsImages/sintaxisBasica.png';
import pokeFinder from '../ProyectsImages/pokeFinder.png';
import carousel from '../ProyectsImages/carousel.png';

function Proyects(props) {
  return (
    <div className="projects" id="projects">
      <h2 className="subtitle">Proyectos</h2>
      <div className="projects-grid">
        <Project
          src={sintaxisBasica}
          alt="sintaxis basica"
          href="https://maurijrp.github.io/sintaxis-basica/"
          description="Sintaxis basica de lenguajes que utilizo"
        />
        <Project
          src={pokeFinder}
          alt="sintaxis basica"
          href="https://maurijrp.github.io/PokemonFinder/"
          description="Buscador de pokemones"
        />
        <Project
          src={carousel}
          alt="sintaxis basica"
          href="https://maurijrp.github.io/Carousel/"
          description="Carousel de imagenes"
        />
      </div>
    </div>
  );
}

export default Proyects;
