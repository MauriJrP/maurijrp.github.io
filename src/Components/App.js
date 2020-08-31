import React from 'react';
import './Styles/App.css';

// -------- ------- ------ ----- Components ----- ------ ------- --------
import NavBar from './NavBar';
import Main from './Main';
import Proyects from './Projects';
import Form from './Form';

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="app">
        <NavBar />
        <Main />
        <Proyects />
        <Form />
      </div>
    </div>
  );
}

export default App;
