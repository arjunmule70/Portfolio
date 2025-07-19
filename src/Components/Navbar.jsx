import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleHamburger = () => {
        setMenuOpen((open) => !open);
    };

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-5'>
            <div className='brand'>
                <Link className='navbar-brand' to='/'>My Portfolio</Link>
            </div>

            <div className='navbar-parent'>
                <ul className={`navbar-nav ${menuOpen ? 'mobile-open' : ''}`}>

                    <li className='nav-item'>
                        <Link className='nav-link' to='/' onClick={handleNavClick}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/About' onClick={handleNavClick}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/Skills' onClick={handleNavClick}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/Works' onClick={handleNavClick}>Works</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/Contact' onClick={handleNavClick}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={handleHamburger} aria-label="Toggle navigation" tabIndex={0} role="button">
                <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }}></span>
                <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }}></span>
            </div>
        </nav>
    )
}

export default Navbar;
