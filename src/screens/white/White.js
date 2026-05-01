import React, { useState, useEffect } from 'react';
import './white.css';
import ducky from '../../images/projectimages/ducky5.png';
import ParticlesBg from 'particles-bg';





function White() {
    const currentYear = new Date().getFullYear();
    const [particleCount, setParticleCount] = useState(100);

    useEffect(() => {
        const updateParticleCount = () => {
            setParticleCount(window.innerWidth <= 768 ? 26 : 100);
        };

        updateParticleCount();
        window.addEventListener('resize', updateParticleCount);
        return () => window.removeEventListener('resize', updateParticleCount);
    }, []);

    return (
        <div className='duckyContainer' id='contact'>
            <ParticlesBg type="cobweb" color="#ffffff" num={particleCount} />
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