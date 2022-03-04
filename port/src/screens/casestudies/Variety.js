import React from "react";
import'./variety.css';
import {
  Link
} from "react-router-dom";
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import ReactPlayer from 'react-player';
import varietyvideo from '../../images/video/varietyvideo.mp4';
import ovhp from '../../images/projectimages/ovhp.png';
import vp from '../../images/projectimages/Varietypersona.png';
import ccvp from '../../images/projectimages/ccvp.png';
import Ilike from '../../images/projectimages/Ilike.png';
import affinity from '../../images/projectimages/affinity.jpg';
import scenarioVariety from '../../images/projectimages/scenarioVariety.png';
import vflow from '../../images/projectimages/vflow.png';
import home from '../../images/projectimages/homepageVariety.jpg';
import smiling from '../../images/projectimages/smiling.png';



function Variety(){
    return(
        <div className="case4" id="">
               <Navigation/>
               <ReactPlayer className="spike"
        url={varietyvideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />   
          {/* <div className="hero_image4">
          <div className="hero_text4">
            <h3>Case Study</h3>
            <h1>Charity Redesign</h1>
          </div>
          </div>
         */}

       <div className="container-fluid2" >
          <Row className="char">
          <Col lg={12} >
          <div className="theProject4">
              <title> Charity Redesign - Variety DC - The Children's Charity</title>
<h4>The Project:</h4><h5>To Redesign Variety DC's website for greater impact, donations and engagement.<br/></h5>
<br/><h4>Problem Statement:</h4><h5>Smaller local nonprofit organizations do not have enough money or resources to spend on creating an engaging website. Without user engagement, this affects the volume of donations given to the charity and also limits the number of volunteers and donors.
<br/></h5>
<h4>Tools:</h4> <h5>Figma, Invision, noun project,unsplash, miro, Adobe XD, awesome screenshot, Canva, Adobe Editor, Creative Cloud</h5>

          </div>
          </Col>
          </Row>
        <Row className="additions">
        <Col lg={6} className="gridtextbox44" > 
        <img src={ovhp} className="hp" alt="homepage"></img> 
        </Col>
        <Col lg={6} className="gridtextbox44">
          <div className="valueProp">
            <h4>First:</h4> <br/> 
            <br/> 
            <ul>
            <h5><li> What are the main painpoints of the website?</li><br/> 
            <li> What are Variety's top objectives?</li><br/> 
           </h5>
              </ul><br/> 
  <h4>We need to 1st discover the fundamental problems with the website as is. </h4> <br/> 

</div>
</Col>
        </Row>
        <Row className="vinsight">
        <Col lg={6} className="gridtextbox2">
          <div className="valueProp">
            <h4>Usability Testing and Competitor Analysis:</h4> <br/> 
            <br/> 
            <ul>
            <h5><li> “News is weird.  Why is it set up that way?” </li><br/> 
            <li> “What might be neat, is a news timeline”</li><br/> 
            <li> “Colors are conflicting and odd”</li><br/> 
           </h5>
              </ul><br/> 
  <h4>It was obvious that the other websites added more “Donate” buttons, continuous avenues and reminders to donate. </h4> <br/> 
          </div>
          </Col>
          <Col lg={6} id="vp" className="gridtextbox1" > 
        <img src={Ilike} className="like" alt="ilike"></img> 
         <img src={ccvp} className="red" alt="ccvp"></img> 
        </Col>

        </Row>
          <Row className="questions99">
          <Col lg={6} id="vp" className="gridtextbox1" > 
          <div >
             <h3>Interview with Executive Director and Usability Testing:<br/>
What is Variety ?<br/>
What is most important to redesign?<br/>
How are people donating?<br/>
How do people know about the events?<br/>
</h3>
          </div>
          </Col>
          <Col lg={6} className="gridtextbox3">
          <img src={vp} className="user" alt="user"></img>
       
          </Col>
          </Row>
          <Row className="userp">
          <div className="researchPlan3">
            <h3>We needed to target user and user steps: </h3><br/>
    <h4>Our storyboard, journey map, Executive Director interview, user testing, competitive analysis had given us our first goals, problems to identify and leads on what our customer - Variety DC wanted.</h4>
Affinity Diagram <img src={affinity} className="child" alt="vaffinity"></img> <br/>
User Scenerio <img src={scenarioVariety} className="child" alt="vaffinity"></img><br/>
User Flow <img src={vflow} className="child" alt="vflow"></img><br/>
          </div>
          </Row>
          <Row className="now4">
          <Col lg={6}   > 
          <div >
             <h3>How do we engage the user?</h3><h2>Smiling Children!!!</h2><br/>
          </div>
          <img src={home} className="smile" alt="style"></img>
          </Col>
          <Col lg={6}   > 
          <div >
          <h3>The Kids First!!!</h3><br/><br/>
          <h4>
Our first achievement was to get a video on the home screen. This was difficult as all we initially had was a Utube link.  After much investigation and work, we were able to cut it and have it as our main banner.  This was incredibly important as the one consist positive of the website were the “smiling kids”, so we wanted to showcase that more.</h4><br/>
<img src={smiling} className="smile" alt="smiling spike"></img>
          </div>
          </Col>
          </Row>
  
          <Row className="thoughts">
          <Col lg={12}  className="gridtextbox4" >
            <h3>Now to focus on Colors and theme, Donation process and Events page:</h3> 
          <h5>HOW?<br/> Make it more fun.<br/>
Create animation! Put donation buttons everywhere!<br/>
Create Events page that draws you in and keeps you interested. <br/></h5>
          </Col>
          </Row>
          <div className="last4" >
         <h3 className="keep4">More Projects...</h3>
         <Link to="/Govt" className="btn btn-dark" id="projects_button4" alt="govt">Govt Redesigned Website</Link>
         <Link to="/Hitch" className="btn btn-dark" id="projects_button4" alt="hitchhiker">Original Travel App</Link>
         <Link to="/Case1" className="btn btn-dark" id="projects_button4" alt="planta">Plantagochi</Link>
       </div>
          </div>
       
       </div>
         
    
    )
}
export default Variety