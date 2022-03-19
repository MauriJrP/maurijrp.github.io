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
					</span>
					soy Mauricio Rodríguez, Desarrollador de Software
					<span role="img" aria-label="hands">
						👨‍💻
					</span>{' '}
					originario de México. Actualmente estoy cursando sexto semestre de
					Ingeniería en Computación
					<span role="img" aria-label="hands">
						💻
					</span>
					. <br />
				</p>
			</div>
		);
	}
}

export default Description;
