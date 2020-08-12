import React from 'react';
import './Styles/App.css';

// -------- ------- ------ ----- Components ----- ------ ------- --------
import NavBar from './NavBar.js';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
