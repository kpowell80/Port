import React from "react";
import './allseasons.css';
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import BackButton from '../../components/BackButton';
import {
  Link
} from "react-router-dom";


function AllSeasons(){
    return(
        <div className="case-allseasons" id="">
           <Navigation/>
          <div className="hero-image-allseasons">
          <div className="hero-text-allseasons">
            <h3>Project</h3>
            <h1>All Seasons Landscaping</h1>
            <p className="hero-subtitle">Full React Build & Brand Transformation · 2024</p>
          </div>
          </div>
       <div className="container-fluid-allseasons" >
          <BackButton />
          <Row >
          <Col lg={12} >
          <div className="theProject-allseasons">
<h4>The Project</h4>
<h5>Design and build a complete website for a Sun Valley, Idaho-based landscaping company, transforming an outdated, low-visibility web presence into a modern, experience-driven platform that reflects the quality of their work and drives new client acquisition.<br/></h5>
<br/>
<h4>My Role</h4>
<h5>Solo designer and developer leading the full project lifecycle:</h5>
<ul className="role-list">
  <li>Brand identity and UI system design</li>
  <li>Custom React development</li>
  <li>Content strategy and site architecture</li>
  <li>On-site research, photography direction, and client interviews</li>
  <li>SEO structure and deployment</li>
</ul>
<br/>
<h4>Approach</h4>
<h5>To accurately represent the company, I traveled to Sun Valley, Idaho to work directly with the team.</h5>
<ul className="role-list">
  <li>Met with leadership to understand business goals and positioning</li>
  <li>Visited active job sites to experience the work firsthand</li>
  <li>Gathered original photography, project examples, and testimonials</li>
  <li>Identified gaps in the existing website, which relied on outdated HTML and lacked visual storytelling</li>
</ul>
<h5>This hands-on approach ensured the final product reflected both the quality of the work and the culture of the company.</h5>
<br/>
<h4>The Solution</h4>
<h5>Rebuilt the entire site from the ground up using React, shifting from a static, text-heavy experience to a visual, mobile-first platform.</h5>
<ul className="role-list">
  <li>Introduced video, photography, and dynamic layouts to showcase real work</li>
  <li>Created a clean, modern UI system aligned with the brand</li>
  <li>Structured content to guide users toward key actions (services, contact, consultation)</li>
  <li>Optimized performance and SEO to improve discoverability</li>
</ul>

          </div>
          </Col>
          </Row>
        <Row>
        <Col lg={12} md={12} className="section-allseasons">
          <div className="valueProp-allseasons">
            <h4>What I Built</h4> <br/>
            <ul>
            <li>Custom React components and routing architecture</li>
            <li>Mobile-first responsive design system</li>
            <li>Full brand identity (color system, typography, visual direction)</li>
            <li>SEO-optimized content and site structure</li>
            <li>Integrated media (video + photography) to elevate storytelling</li>
            <li>Deployment and performance optimization</li>
            </ul>
            <br/>
            <h4>Tech Stack</h4>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML/CSS</li>
              <li>Git</li>
            </ul>
          </div>
        </Col>
        </Row>

        <Row>
        <Col lg={12} className="section-allseasons">
          <div className="impact-allseasons">
            <h4>Impact</h4>
            <ul className="role-list">
              <li>Transformed a dated, low-engagement website into a modern digital presence</li>
              <li>Positioned the company competitively in the Sun Valley luxury landscaping market</li>
              <li>Created a scalable foundation for future content, services, and growth</li>
              <li>Significantly improved visual credibility and client trust</li>
            </ul>
            <br/>
            <h4>Key Takeaway</h4>
            <h5>This project reflects how I work: I don't just build websites—I immerse myself in the business, understand the customer, and create systems that represent the work accurately and drive results.</h5>
          </div>
        </Col>
        </Row>

          </div>
        </div>
    )
}

export default AllSeasons
