import { useState } from 'react'
import './sass/styles.scss'
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <nav><Link to={'/'}>In Depth</Link><br/><Link to={'/'}><Horse />Home</Link ><br/><Link to={'/about'}><Heart />About</Link><br/><Link to={'/services'}><Cube />Services</Link><br/><Link to={'/contact'}><Heart />Contact</Link><br/><Link to={'/works'}><Heart />Works</Link><br/><Link to={'/blog'}><Heart />Blog</Link></nav>
      <Outlet />
      <h1>In Depth Footer</h1>
    </>
  )
}

export default App
