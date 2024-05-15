import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://linkedin.com/in/williameqi" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-logo.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Will3721" target="_blank" rel="noopener noreferrer">
                <img src="/github-logo.png" alt="GitHub" />
            </a>
            <a href="mailto:willqi@seas.upenn.edu">
                <img src="/mail.svg" alt="Email" />
            </a>
        </div>
    );
};

export default Footer;
