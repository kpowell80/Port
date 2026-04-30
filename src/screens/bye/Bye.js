import React from 'react';
import './bye.css';
import ParticlesBg from 'particles-bg';



function Bye(){
    return(
        <div className="byes">
      <ParticlesBg type="cobweb" color="#ffffff" num={100} />
      <div className="hero-content">
        <p className="hero-label">Customer Success · UX/UI Design · Full-Stack Development</p>
        <h1 className="name">I create connections that turn complexity into experience.</h1>
        <h5 className="bland">From customer insight to execution, I build systems, products, and relationships that work..</h5>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary-hero">View My Work</a>
          <a href="#resume" className="btn-ghost-hero">Experience</a>
        </div>
      </div>
 </div>

    )
}


export default Bye
