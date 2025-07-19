import React from 'react'
import Arjun from '../photo/a.png'
import '../Style/Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {

    const Navigate = useNavigate();

    function handleClick() {
        Navigate('/Works')
    }

    return (
        <div className='card main'>
            <div className='parent-card'>
                <div className='child'>
                    <h1>hi, I'm Arjun</h1>
                    <br />
                    <p><strong>Frontend Developer | MCA Graduate – 2025</strong></p>

                    <p>Passionate about building clean, responsive, and interactive web interfaces using <strong>React</strong> and <strong>JavaScript</strong>.</p>

                    {/* <p>I love turning ideas into real web experiences that are both functional and visually engaging.</p> */}

                    <p>Currently seeking my first opportunity to grow as a developer and apply my skills in a real-world environment.</p>

                    <p>Eager to learn, collaborate, and contribute to meaningful projects in the tech industry!</p>

                    <br />
                    <button onClick={handleClick} type="button" className="btn">View My Projects</button>
                </div>
                <div>
                    <img src={Arjun} alt="" className='arjun-img' />
                </div>
            </div>
        </div>
    )
}

export default Home
