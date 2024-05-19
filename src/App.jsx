import { useState } from 'react'
import './sass/styles.scss'
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <h1 className='glassmorph'>In Depth Footer</h1>
    </>
  )
}

export default App
