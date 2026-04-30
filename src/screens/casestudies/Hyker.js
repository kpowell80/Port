import React from "react";
import './hyker.css';
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import hhMiro from '../../images/projectimages/miroH.png';


function Hyker(){
    return(
        <div className="case-hyker" id="">
           <Navigation/>
          <div className="hero-image-hyker">
          <div className="hero-text-hyker">
            <h3>Project</h3>
            <h1>Hyker</h1>
            <p className="hero-subtitle">Travel & Discovery Platform · Live Build in Progress</p>
          </div>
          </div>
       <div className="container-fluid-hyker" >
          <BackButton />
          <Row >
          <Col lg={12} >
          <div className="theProject-hyker">
<div style={{backgroundColor: '#f5f5f5', padding: '1.5rem', marginBottom: '2rem', border: '1px solid #e0e0e0'}}>
<h5 style={{margin: 0, fontWeight: 500, color: '#0a0a0a'}}>Hyker is currently in active development. This case study reflects the product vision, system design, and build in progress.</h5>
</div>
<h4>The Project</h4>
<h5>Hyker is a travel and discovery platform designed to help people find meaningful, transportive experiences—without the overwhelm of traditional travel planning tools.<br/><br/>
The goal is to move beyond generic recommendations and create a system that feels curated, intuitive, and deeply personal.</h5>
<br/>
<h4>The Vision</h4>
<h5>Most travel platforms optimize for volume—more options, more lists, more noise.<br/><br/>
Hyker takes a different approach.<br/><br/>
It brings together city guides, restaurants, hotels, cultural experiences, itineraries, and personal recommendations into a single, curated ecosystem designed to help users discover what actually matters.<br/><br/>
The platform sits at the intersection of:</h5>
<ul className="role-list">
  <li>Editorial storytelling</li>
  <li>Structured data</li>
  <li>Personalized discovery</li>
</ul>
<br/>
<h4>My Role</h4>
<h5>Founder, designer, and developer leading the full build:</h5>
<ul className="role-list">
  <li>Product concept and UX strategy</li>
  <li>End-to-end UI design system</li>
  <li>Full React application architecture</li>
  <li>Content structure and data modeling</li>
  <li>AI-driven discovery and recommendation logic</li>
</ul>
<br/>
<h4>Approach</h4>
<h5>Hyker is being built with a focus on how people actually explore and decide, not just how platforms traditionally present information.</h5>
<ul className="role-list">
  <li>Designing for discovery over search</li>
  <li>Structuring content to feel curated, not overwhelming</li>
  <li>Building flexible systems that allow content to scale across cities and categories</li>
  <li>Integrating AI to enhance—not replace—the user's sense of exploration</li>
</ul>
<h5>The goal is to create an experience that feels less like a tool and more like a trusted guide.</h5>

          </div>
          </Col>
          </Row>
        <Row>
        <Col lg={12} md={12} className="section-hyker">
          <div className="valueProp-hyker">
            <h4>What I'm Building</h4> <br/>
            <ul>
              <li>A full React-based web application with modular architecture</li>
              <li>A structured content system across cities, restaurants, hotels, and experiences</li>
              <li>Personalized discovery features powered by AI</li>
              <li>Dynamic search and navigation across multiple categories</li>
              <li>A scalable design system that supports editorial and functional content</li>
            </ul>
            <br/>
            <h4>Tech Stack</h4>
            <ul>
              <li>React.js (hooks, component architecture)</li>
              <li>JavaScript (ES6+)</li>
              <li>Node / API integration</li>
              <li>MongoDB (structured content + scaling data model)</li>
              <li>AI/ML integration (recommendation logic)</li>
            </ul>
            <br/>
            <h4>Current Progress</h4>
            <ul>
              <li>Core React architecture established</li>
              <li>Design system defined (typography, layout, structure)</li>
              <li>Initial city + content models created</li>
              <li>Search / discovery flows mapped</li>
              <li>AI recommendation logic in development</li>
            </ul>
            <br/>
            <div style={{marginTop: '2rem'}}>
              <img src={hhMiro} alt="Hyker design process and system mapping" style={{width: '100%', height: 'auto', border: '1px solid #e0e0e0'}} />
              <p style={{fontSize: '0.85rem', color: '#666666', marginTop: '1rem', textAlign: 'center', fontStyle: 'italic'}}>Early system mapping and UX architecture for Hyker's discovery flows</p>
            </div>
          </div>
        </Col>
        </Row>

        <Row>
        <Col lg={12} className="section-hyker">
          <div className="impact-hyker">
            <h4>Next Steps</h4>
            <h5>With core architecture and design systems in place, the next phase focuses on building out the content ecosystem, refining the AI recommendation engine, and launching initial city experiences.<br/><br/>
            A full case study—including user research, system design, and technical decisions—will be published as the platform evolves.<br/><br/>
            <strong>Private demo available upon request.</strong></h5>
          </div>
        </Col>
        </Row>

          </div>
        </div>
    )
}

export default Hyker
