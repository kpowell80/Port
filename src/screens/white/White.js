import React from 'react';
import './white.css';
import ducky from '../../images/projectimages/ducky5.png';
import ParticlesBg from 'particles-bg';





function White() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='duckyContainer' id='contact'>
            <ParticlesBg type="cobweb" color="#ffffff" num={100} />
            <div className='footer-content'>
                <h3 className='whitespace'>Let's work together</h3>
                <p className='availability-text'>Available for opportunities in Customer Success, UX/UI Design, and Full-Stack Development</p>
                <div className='contact-info'>
                    <a href="mailto:reillykatelin0@gmail.com">reillykatelin0@gmail.com</a>
                    <a href="https://www.linkedin.com/in/katelinreilly/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/kpowell80" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <p className='white'>© {currentYear} Katelin Reilly · Designed & built in React · San Diego, CA</p>
            </div>
            <img src={ducky} alt="duck" className='ducky'></img>
        </div>

        )
    }
    
    export default White