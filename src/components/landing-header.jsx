import React from 'react'
import logoSvg from '../assets/logo_svg.svg'
import './landing-header-style.css'

export const LandingHeader = () => {

    const toggleNavbar = () => {
        const $navbarMenu = document.getElementById('landing-navbar-menu')
        $navbarMenu.classList.toggle('landing-navbar-menu-visible')
    }

    return (
        <header className='landing-header'>
            <nav className='landing-navbar'>

                <a href="#" className="landing-navbar-logo">
                    <img src={logoSvg} />
                    <span>Web Solutions Development</span>
                </a>
                <button className='landing-navbar-toggle' onClick={toggleNavbar}>
                    <i class='bx bx-menu bx-md'></i>
                </button>

                <ul id='landing-navbar-menu' className='landing-navbar-menu'>

                    <li className="landing-navbar-item">
                        <a href="#" className="landing-navbar-link">
                            Inicio
                        </a>
                    </li>
                    <li className="landing-navbar-item">
                        <a href="#" className="landing-navbar-link">
                            Servicio
                        </a>
                    </li>
                    <li className="landing-navbar-item">
                        <a href="#" className="landing-navbar-link">
                            Quiénes Somos
                        </a>
                    </li>
                    <li className="landing-navbar-item">
                        <a href="#" className="landing-navbar-link">
                            Contáctanos
                        </a>
                    </li>
                </ul>


            </nav>

        </header>
    )
}
