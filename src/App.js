import React, { useState } from 'react';
import './App.css';
import ImageGallery from './Components/Image Gallery/ImageGallery';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  const [rows, setRows] = useState(1)
  const [cols, setCols] = useState(1)

  const saveCols = (val) => {
    setCols(val)
  }

  const saveRows = (val) => {
    setRows(val)
  }

  return (
      <div className='App'>
        <Navbar saveCols={saveCols} saveRows={saveRows}/>
        <div className='App-body'>
          <div className='App-body-left'>
            <Sidebar/>
          </div>
          <div className='App-body-right'>
            <ImageGallery cols={cols} rows={rows}/>
          </div>
        </div>
      </div>
  )
}

export default App;
