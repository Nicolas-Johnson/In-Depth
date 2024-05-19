import React, { useState } from 'react'
import { Horse, Heart, Cube } from "@phosphor-icons/react";
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/img/inDepth_LOGOBRANCA.svg';
import menu from '../assets/img/menu.svg';
import menuOpen from '../assets/img/menuOpen.svg';

const NavBar = () => {

    const [isOpen, seOpen] = useState(false);

    const handleToggle = () => {
        const menu = document.querySelector('.menutoggle');
        const list = document.querySelector('.navigate');

        if(isOpen) {
            menu.setAttribute('src', 'src/assets/img/menu.svg');
            list.classList.toggle('show');
            seOpen(!isOpen);
        } else if(!isOpen) {
            menu.setAttribute('src', menuOpen);
            list.classList.toggle('show');
            seOpen(!isOpen);
        }
    }


    return (
        <div className='nav'>
            <nav className="wrapper">
                <img className='logo' src={logo} alt="In depth logo" />
                <img onClick={handleToggle} className='menutoggle' src={menu} alt="menu icon toggle" />
                <div className="navigate">
                    <ul className='menuList'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/services'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'/works'}>Works</Link>
                        </li>
                        <li>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar