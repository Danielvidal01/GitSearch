import React from 'react';
import './App.css';

import Footer from './Components/Footer/index.jsx';
import Header from './Components/Header/index.jsx';
import Main from './Components/Main/index.jsx';




function App() {
  return (
    <div className="App">
        <Header></Header>
          <div id='Main'>
          <Main></Main>
          </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
