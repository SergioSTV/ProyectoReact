
import './NavBar.css'

import React from 'react';
import logoImg from "G:\fitcommerce\public\wefit.png";

const NavBar = () => {
    return (
        <nav className="navBar text-white">
            <ul className='BarOptions'>
                <img src={logoImg} alt="logo" />
                <li><a href="#">¿Quienes somos?</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;