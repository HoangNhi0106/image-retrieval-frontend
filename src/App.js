import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGallery from './Components/Image Gallery/ImageGallery';
import Navbar from './Components/Navbar/Navbar';
import Pagination from './Components/Pagination/Pagination';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  const [rows, setRows] = useState(1)
  const [cols, setCols] = useState(1)
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(10)
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [images, setImages] = useState([])

  let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      console.log(windowWidth, windowHeight)
      return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  useEffect(() => {
    if (numPages > 1)
        setPages([1, 2])
    else
        setPages([1])
}, [])

  const saveNumPages = (num) => {
    setNumPages(num)
  }

  const changePages = (arr) => {
    setPages(arr)
  }

  const changePage = (a) => {
    setPage(a)
  }

  const saveCols = (val) => {
    setCols(val)
  }

  const saveRows = (val) => {
    setRows(val)
  }

  const saveImages = (images) => {
    setImages(images);
  }

  return (
      <div className='App'>
        <Navbar saveCols={saveCols} saveRows={saveRows}/>
        <div className='App-body'>
          <div className='App-body-left'>
            <Sidebar saveImages={saveImages}/>
          </div>
          <div className='App-body-right'>
            <ImageGallery cols={cols} rows={rows} windowWidth={windowWidth} windowHeight={windowHeight} images={images} saveNumPages={saveNumPages} page={page}/>
            <Pagination numPages={numPages} changePages={changePages} changePage={changePage} page={page} pages={pages}/>
          </div>
        </div>
      </div>
  )
}

export default App;
