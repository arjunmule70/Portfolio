import React from 'react'
import '../Style/Works.css'
import wedd from '../Logo/wedd.jpeg'
import d from '../Logo/distance.jpeg'
import blog from '../Logo/blog.jpeg'
import stream from '../Logo/stream.jpeg'
import bot from '../Logo/BotNew.png'

function Works() {
    return (
        <div className='card mt-4 work-card'>

            <div className='d-flex align-self-center'>
                <h2 className='p-head'>Projects</h2>
            </div>
            <div className='work-parent-box'>
                <div className='box2 w'>
                    <img src={wedd} alt="" className='wedds' />
                    <h5>Waghchaure Lawns</h5>
                    <h6>Internship Project</h6>
                </div>
                <div className='box2 I'>
                    <img src={bot} alt="" className='bot' />
                    <h5>Interview Bot</h5>
                    <h6>Personal Project</h6>
                </div>
                <div className='box2 D'>
                    <img src={d} alt="" className='distance' />
                    <h5>Distance Learning</h5>
                    <h6>Acadmic Project</h6>
                </div>



            </div>
            <br />
            <div className='work-parent-box'>
                <div className='box1 py'>
                    <img src={blog} alt="" className='python mb-3' />
                    <h5>Bloging Website</h5>
                    <h6>Acadmic Project</h6>
                </div>
                <div className='box1 java'>
                    <img src={stream} alt="" className='stream mb-2' />
                    <h5>Video Streaming App</h5>
                    <h6>Acadmic Project</h6>
                </div>




            </div>

        </div>
    )
}

export default Works
