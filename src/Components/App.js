import React from 'react';
import './Styles/App.css';

// -------- ------- ------ ----- Components ----- ------ ------- --------
import NavBar from './NavBar';
import Main from './Main';
import Proyects from './Projects';

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="app">
        <NavBar />
        <Main />
        <Proyects />
      </div>
    </div>
  );
}

export default App;
