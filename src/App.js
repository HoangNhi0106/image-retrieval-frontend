import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return (
      <div className='App'>
        <Navbar/>
        <div className='App-body'>
          <Sidebar/>
        </div>
      </div>
  )
}

export default App;
