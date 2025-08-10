import React from 'react'
import '../Style/Skills.css'
import htmlcss from '../Logo/image.png'
import Js from '../Logo/download.png'
import Rjs from '../Logo/react.png'
import java from '../Logo/java.png'
import py from '../Logo/py.jpeg'
import sql from '../Logo/mysql.png'


function Skills() {
    return (
        <div className='card mt-4 skills-card'>

            <div className='d-flex align-self-center'>
                <h2 className='head'>Skills</h2>
            </div>
            <div className='parent-box'>
                <div className='box1 h'>
                    <img src={htmlcss} alt="" className='htmlcss' />
                    <h5>html/css</h5>
                    <h6>Good</h6>
                </div>
                <div className='box1 js'>
                    <img src={Js} alt="" className='htmlcss' />
                    <h5>JavaScript</h5>
                    <h6>Good</h6>
                </div>
                <div className='box1 rea'>
                    <img src={Rjs} alt="" className='reactjs' />
                    <h5>React.js</h5>
                    <h6>Good</h6>
                </div>



            </div>
            <br />
            <div className='parent-box'>
                <div className='box1 py'>
                    <img src={py} alt="" className='python mb-3' />
                    <h5>Python</h5>
                    <h6>Basic</h6>
                </div>
                <div className='box1 java'>
                    <img src={java} alt="" className='htmlcss mb-2' />
                    <h5>Java</h5>
                    <h6>Basic</h6>
                </div>
                <div className='box1 sql'>
                    <img src={sql} alt="" className='htmlcss' />
                    <h5>Mysql</h5>
                    <h6>Good</h6>
                </div>



            </div>

        </div>
    )
}
export default Skills
