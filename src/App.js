import React from 'react'
import './App.css'
import Header from './compotents/Header/Header'
import Main from './compotents/Main/Main'
import Nav from './compotents/Nav/Nav';


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
