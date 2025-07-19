import React from 'react';
import '../Style/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-name">&copy; {new Date().getFullYear()} Arjun Mule-Patil</span>

            </div>
        </footer>
    );
}

export default Footer; 