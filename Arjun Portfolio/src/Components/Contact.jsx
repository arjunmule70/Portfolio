// import React from 'react'
// import '../Style/Contact.css'

// function Contact() {
//     return (
//         <div className="contact-gradient-bg">
//             <div className="contact-container">
//                 <h1 className="contact-title">
//                     Let's Connect <span className="contact-butterfly">📞</span>
//                 </h1>
//                 <div className="contact-info-list">
//                     <div className="contact-info-card">
//                         <span className="contact-icon">📧</span>
//                         <span className="contact-info-text">arjumulepatil@gmail.com</span>
//                     </div>
//                     <div className="contact-info-card">
//                         <span className="contact-icon">📱</span>
//                         <span className="contact-info-text">7083102380</span>
//                     </div>
//                     <div className="contact-info-card">
//                         <span className="contact-icon">🚩</span>
//                         <span className="contact-info-text">Chh. Sambhajinagar, Maharashtra</span>
//                     </div>
//                 </div>
//                 <div className="contact-icons-row">
//                     <span className="contact-circle-icon">💼</span>
//                     <span className="contact-circle-icon">📇</span>
//                     <span className="contact-circle-icon">🐙</span>
//                     <span className="contact-circle-icon">🦩</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact




import React from 'react';
import '../Style/Contact.css';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact-gradient-bg">
            <div className="contact-container">
                <h1 className="contact-title">
                    Let's Connect <span className="contact-butterfly">📞</span>
                </h1>

                <div className="contact-info-list">
                    <div className="contact-info-card">
                        <span className="contact-icon">📧</span>
                        <span className="contact-info-text">arjumulepatil@gmail.com</span>
                    </div>
                    <div className="contact-info-card">
                        <span className="contact-icon">📱</span>
                        <span className="contact-info-text">7083102380</span>
                    </div>
                    <div className="contact-info-card">
                        <span className="contact-icon">🚩</span>
                        <span className="contact-info-text">Chh. Sambhajinagar, Maharashtra</span>
                    </div>
                </div>

                <div className="contact-icons-row">
                    <a href="https://www.linkedin.com/in/arjun-mule-b0bb32257" target="_blank" rel="noreferrer" className="contact-circle-icon" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:arjumulepatil@gmail.com" className="contact-circle-icon" title="Email">
                        <FaEnvelope />
                    </a>
                    <a href="https://github.com/arjunmule" target="_blank" rel="noreferrer" className="contact-circle-icon" title="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/yourprofile/" target="_blank" rel="noreferrer" className="contact-circle-icon" title="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
