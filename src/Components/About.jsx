import React from 'react';
import '../Style/About.css';

function About() {
    return (
        <div className='card card-main'>
            <div className='parent-card'>
                <h1 className='h1'>About Me</h1>
                <br />
                <div className="profile-img">👨‍🎓</div>
                <br />

                <div className='p-group'>
                    <p>I am a recent MCA graduate with a strong interest in web development.</p>
                    <p>I enjoy building clean and responsive user interfaces using React.js, JavaScript, HTML, and CSS.</p>
                    <p>I've worked on real projects like an event booking system and an AI-powered interview bot.</p>
                    <p>I’m looking forward to joining a team where I can learn more and contribute with my frontend skills.</p>
                </div>

                <div className='inner-card card'>
                    <h4>🎓 Education</h4>
                    <p className='b-p'>MCA – Maharashtra Institute of Technology</p>
                    <p className='b-p'>CGPA: 7.99 - 2025</p>
                </div>
            </div>
        </div>
    );
}

export default About;
