import { useState, useContext } from 'react'
import './sass/styles.scss'
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { DataContext } from './Hooks/useContext';
import { blogs, services, works } from './assets/Data.js';

function App() {
  const [data, setData] = useState({
    blogs: [...blogs],
    services: [...services],
    works: [...works],
  });

  return (
    <DataContext.Provider value={{data}}>
      <NavBar />
      <Outlet />
      <h1 className='glassmorph'>In Depth Footer</h1>
    </DataContext.Provider>
  )
}

export default App
