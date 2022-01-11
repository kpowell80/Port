import React from 'react';
import './cards.css';
import Typed from 'react-typed';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import CardGroup from 'react-bootstrap/CardGroup';
import gov from"../../images/projectimages/blckwhns.png";
import colorg from"../../images/projectimages/nsaport.png";
import colorp from'../../images/projectimages/Rectangle 16.png';
// import mobile from '../../images/projectimages/spikeport-2.png';
import spike from '../../images/projectimages/Rectangle 56.png';
// import spike from '../../images/projectimages/spikebw.png';
import video from '../../images/Rectangle 57.png';
import planta from '../../images/projectimages/bwplantn.png';
import hhbw from '../../images/projectimages/hhportbw.png';
import HH from '../../images/projectimages/hhport.png';


function Cards() {
  return (
    
      <div className="container-fluid  p-5 bg-light" >
         <h1 className="projects" >Projects.</h1> 
          <p className="hi"> <Typed 
                strings={[
                    "",
                    "Government Agency Web Redesign",
                    "Children's Charity Web Redesign",
                    "Plantagochi Plant Watering App",
                    "Covid Safe Travel App",
                    "",
                    "",]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop 
                />
          </p>
           <p className="projects">My Github Page. <br></br>
              <a href ="https://github.com/kpowell80" id="git" target="blank" rel="noreferrer"> github.com/kpowell80</a>
           </p>
        <div className="row">
          <div className="flipContainer col-xl-5 lg-5 col-md-5 col-sm-12" >
            <div className="flip">
            <div className="flip-card" id="card1">
            <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src= {gov} alt="govt"  id="img_g"/>
            </div>
            <div className="flip-card-back">
                <div className="card">
                <img class="card-img-top" src={colorg} id="img1b" alt="web"/>
                <h5 class="card-title">NSA WEBSITE/MOBILE REDESIGN</h5>
                <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>Redline/Competitor analysis</li>
                  <li>Usability Testing</li>
                  <li>Prototyping/Ideation</li>
               </ul>
               <a href="https://docs.google.com/document/d/1DgrqMZmE4A2eAhr_XUF2Wzz8qZr0MGcULPRUS_Th640/edit?usp=sharing" class="btn btn-dark" alt="case">Full Case Study</a>
                </div>
            </div>
          </div>
            </div>
          </div>
          </div>
          <div className="flipContainer col-xl-5 lg-5 col-md-5 col-sm-12">
          <div className="flip">
          <div className="flip-card" id="card2">
            <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={planta}id="img_g" alt="plant"/> </div>
              <div className="flip-card-back">
              <div className="card">
              <img class="card-img-top" src={colorp} alt="plant" id="img1b"/>
            <h5 class="card-title">PLANT WATERING APP</h5>
            <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>User Interviews/Survey</li>
                  <li>User Matrix</li>
                  <li>Creating POV</li>
               </ul>
            <a href="https://docs.google.com/document/d/1DgrqMZmE4A2eAhr_XUF2Wzz8qZr0MGcULPRUS_Th640/edit?usp=sharing" id="case"class="btn btn-dark" size="lg">Full Case Study</a>
            </div>
          </div>
            </div>
          </div>
          </div>
          </div>
          <div className="flipContainer col-xl-5 lg-5 col-md-5 col-sm-12">
            <div className="flip">
            <div className="flip-card" id="card3">
            <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src= {video} alt="spike"  id="img_g"/>
              </div>
              <div className="flip-card-back">
              <div className="card">
              <img class="card-img-top" src={spike} alt="spike"id="img1b"/>
            <h5 class="card-title">CHARITY WEBSITE REDESIGN</h5>
            <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>Executive Director Interview - Identify PP</li>
                  <li>Affinity Diagram </li>
                  <li>User Flow</li>
               </ul>
            <a href="https://docs.google.com/document/d/1DgrqMZmE4A2eAhr_XUF2Wzz8qZr0MGcULPRUS_Th640/edit?usp=sharing" class="btn btn-dark">Go to Figma</a>
            </div>
            </div>
          </div>
            </div>
          </div>
          </div>
        <div className="flipContainer col-xl-5 lg-5 col-md-5 col-sm-12">
            <div className="flip">
            <div className="flip-card" id="card4">
            <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src= {hhbw} alt="hitchhiker"  id="img_g"/>
              </div>
              <div className="flip-card-back">
              <div className="card"> 
              <img class="card-img-top" src={HH} alt="Hitch" id="img1b"/>
            <h5 class="card-title">MOBILE TRAVEL APP</h5>
            <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>Competitor Analysis</li>
                  <li>Empathy Mapping</li>
                  <li>Usability Testing</li>
               </ul>
            <a href="https://docs.google.com/document/d/1DgrqMZmE4A2eAhr_XUF2Wzz8qZr0MGcULPRUS_Th640/edit?usp=sharing" class="btn btn-dark">Go to Figma</a>
            </div>
            </div>
          </div>
            </div>
          </div>
          </div>
        </div>
        </div>
 
  )
}

export default Cards;