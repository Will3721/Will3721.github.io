import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <NavLink to="/" end>William Qi</NavLink>
                </li>
                <div className="right-links">
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <a href="/William_Qi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
