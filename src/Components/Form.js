import React, { Component } from 'react';
import './Styles/Form.css';
import Mail from '../images/mail.png';
// import emailjs from 'emailjs-com';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      feedBack: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.message !== '' && this.state.email !== '') {
      const templateId = 'template_hjqgc4z';
      this.sendFeedback(templateId, {
        message: this.state.message,
        from_name: this.state.name,
        reply_to: this.state.email,
      });
    } else {
      this.feedbackMessage('incorrect')
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send('service_f3cagsg', templateId, variables)
      .then((res) => {
        console.log('Email successfully sent!');
        this.feedbackMessage('correct');
      })
      .catch((err) => {
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
        this.feedbackMessage('incorrect')
        });
  }

  feedbackMessage(message) {
    if (message === 'correct') {
      this.setState({
        feedBack: `form__div-correct`
    });
    } else {
      this.setState({
        feedBack: `form__div-incorrect`
    });
    }
    setTimeout( (  ) => {
      this.setState({
        feedBack: ``
    });
    }, 4000)
  }

  render() {
    return (
      <>
        <h2 className="subtitle" id="contact">
          Contactame
        </h2>
        <div className="form-section">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="form__label">
              <p className="form__p"> Nombre </p>
              <input
                type="text"
                className="form__input"
                autoComplete="off"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label className="form__label">
              <p className="form__p"> Correo de contacto </p>
              <input
                type="email"
                className="form__input"
                autoComplete="off"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label className="form__label">
              <p className="form__p"> Mensaje </p>
              <textarea
                type="text"
                className="form__input form__textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </label>
            <div className={`form__div-feedback ${this.state.feedBack}`}>
              { this.state.feedBack === 'form__div-correct' && <p>Mensaje enviado correctamente</p>}
              {
                this.state.feedBack === 'form__div-incorrect' && <p>Llena todos los campos correctamente</p>
              }
            </div>
            <input type="submit" className="form__submit" />
          </form>
          <a
            href="https://stories.freepik.com/communication"
            className="form-section__img-credits"
          >
            Illustration by Freepik Stories
          </a>
          <img src={Mail} alt="Mail to" className="form-section__img" />
        </div>
      </>
    );
  }
}

export default Form;
