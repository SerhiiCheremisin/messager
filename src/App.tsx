import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header';
import SideMenu from './components/Navigation/SideMenu';
import Messages from './components/Messages';

function App() {
  return (
    <div className='user-page'>
      <div className="header">
      <Header/>
      </div>
      <div className="side-menu">
        <SideMenu/>
      </div>
      <div className="content">
        <Messages/>
      </div>
  
    </div>
  );
}

export default App;
