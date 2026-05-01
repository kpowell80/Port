import React, { useState, useEffect } from 'react';
import './bye.css';
import ParticlesBg from 'particles-bg';
import FieldNote from '../../components/FieldNote';



function Bye(){
    const [particleCount, setParticleCount] = useState(100);

    useEffect(() => {
        const updateParticleCount = () => {
            setParticleCount(window.innerWidth <= 768 ? 26 : 100);
        };

        updateParticleCount();
        window.addEventListener('resize', updateParticleCount);
        return () => window.removeEventListener('resize', updateParticleCount);
    }, []);

    return(
        <div className="byes">
      <ParticlesBg type="cobweb" color="#ffffff" num={particleCount} />
      <div className="hero-content">
        <p className="hero-label">Customer Success · UX/UI Design · Full-Stack Development</p>
        <h1 className="name">I create connections that turn complexity into experience.</h1>
        <h5 className="bland">From customer insight to execution, I build systems, products, and relationships that work..</h5>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary-hero">View My Work</a>
          <a href="#resume" className="btn-ghost-hero">Experience</a>
        </div>
      </div>
      <FieldNote />
 </div>

    )
}


export default Bye
