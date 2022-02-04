import React, {useState} from "react";
import './cards.css';
import {useSpring,animated} from "react-spring";
import Typed from 'react-typed';
import Row from 'react-bootstrap/Row';
import gov from"../../images/projectimages/blckwhns.png";
import colorp from'../../images/projectimages/Rectangle 16.png';
import video from '../../images/Rectangle 57.png';
import planta from '../../images/projectimages/bwplantn.png';
import hhbw from '../../images/projectimages/hhportbw.png';
import {
  Link
} from "react-router-dom";
// import Case1 from "../casestudies/Case1";


function Card() {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    
    <div className="container-fluid  p-5 bg-light" id="projects" >
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
    <Row>
   
    <div className="cardContainer col-xl-3 lg-3 col-md-6 col-sm-12">
    <animated.div className="one"
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
   
                <img class="img_g1" src={gov} id="img1b" alt="web"/>
                <h5 class="card-title">NSA WEBSITE/MOBILE REDESIGN</h5>
                <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>Redline/Competitor analysis</li>
                  <li>Usability Testing</li>
                  <li>Prototyping/Ideation</li>
               </ul>
               <Link to="./Govt" class="btn btn-dark" alt="govt">Full Case Study</Link>
               </animated.div> 
               </div>
    <div className="cardContainer col-xl-3 lg-3 col-md-6 col-sm-12">
    <animated.div className="one"
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
   
                <img class="img_g1" src={planta} alt="plant" hoverSrc={colorp} />
                <h5 class="card-title">PLANT WATERING ORIGINAL APP</h5>
                <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>User Interviews/Survey</li>
                  <li>User Matrix</li>
                  <li>Creating POV</li>
               </ul>
               <Link to="./Case1" class="btn btn-dark" alt="case">Full Case Study</Link>
              
               </animated.div>  
          </div> 
    <div className="cardContainer col-xl-3 lg-3 col-md-6 col-sm-12">
    <animated.div className="one"
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
   
                <img class="img_g" src={video} alt="spike"/>
                <h5 class="card-title">CHARITY WEBSITE REDESIGN</h5>
                <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>Executive Director Interview</li>
                  <li>Affinity Diagram </li>
                  <li>User Flow</li>
               </ul>
               <Link to="./Variety" class="btn btn-dark" alt="hitch">Full Case Study</Link>
              
               </animated.div>  
          </div> 
    <div className="cardContainer col-xl-3 lg-3 col-md-6 col-sm-12">
    <animated.div className="one"
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
   
                <img class="img_g"src={hhbw} alt="Hitch"/>
                <h5 class="card-title">MOBILE TRAVEL ORIGINAL APP</h5>
                <ul class="card-text" style={{alignContent:"center"}}> 
                  <li>Competitor Analysis</li>
                  <li>Empathy Mapping</li>
                  <li>Usability Testing</li>
               </ul>
               <Link to="./Hitch" class="btn btn-dark" alt="hitch">Full Case Study</Link>
              
               </animated.div>  
          
          </div>
         </Row>
    </div>     
       
  );
          


}
export default Card;