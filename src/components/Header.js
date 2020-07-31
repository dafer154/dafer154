import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const [menuBurguer, setMenuBurguer] = useState(false);

    const showMenu = () => {
        setMenuBurguer(!menuBurguer)
    }

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="/" className="nav__logo">
                        David Z
                    </Link>
                </div>

                <div className={`nav__menu ${menuBurguer ? "show" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <NavLink activeClassName="active" to="/" >
                            <li className="nav__item"><div className="nav__link">Home</div></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/about">
                            <li className="nav__item"><div className="nav__link">About</div></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/resume" >
                            <li className="nav__item"><div className="nav__link">Resume</div></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/skills">
                            <li className="nav__item"><div className="nav__link">Skills</div></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/work">
                            <li className="nav__item"><div className="nav__link">Work</div></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/contact">
                            <li className="nav__item"><div className="nav__link">Contact</div></li>
                        </NavLink>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={() => showMenu()}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}   

export default Header
