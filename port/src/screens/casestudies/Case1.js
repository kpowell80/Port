import React from "react";
import'./case1.css';
import {Player} from 'video-react';
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import greenguy from '../../images/projectimages/greenguystand.png';
import greengal from '../../images/projectimages/greenguystand2.png';
import boy from '../../images/projectimages/boystand.png';
import girl from '../../images/projectimages/girlstand.png';
import game from '../../images/projectimages/game.png';
import points from '../../images/projectimages/waterpoints.png';
import calendar from '../../images/projectimages/CalendarPage.png';
import profile from '../../images/projectimages/pp.png';
import plantcare from '../../images/projectimages/plantcare.png';
import plantv from '../../images/video/plantashort.mp4';
import {
  Link
} from "react-router-dom";


function Case1(){
    return(
     
        <div className="case1" id="">
          <Navigation/>
          <div className="hero_image" >
          <div className="hero_text">
            <h3>Case Study</h3>
            <h1>Plantagochi</h1>
          </div>
          </div>
       <div className="container-fluid2" >
          <Row className="push" >
          <Col lg={12} >
          <div className="theProject1">          
<h4>The Project:</h4><h5> New plant owners in urban areas need assistance in organizing and managing; watering and space limitations for their plants in order to maintain healthy plants and be successful plant owners.</h5>
<h4>Problem Statement:</h4><h5> A single ubanite looking to cultivate a plant collection. He enjoys owning plants for the aesthetic and health value it achieves, however he is finding it difficult to maintain a care schedule because of the lack of personal connection to the plants. How might we design an app  that can create a maintenance schedule for plant care and build a relationship with his green friends.<br/></h5>
<h4>The Solution:</h4> <h5>With the assistance of an app, indoor plant care can be made simple and attainable for even the novice plant owner.</h5>
          </div>
          </Col>
          </Row>
          <Row className="researchPlan1">
          <Col lg={12}>
            <h4>We needed a lot of research: </h4>
<h5>User Interviews: We conducted a total of 6 user interviews between September 7th and 8th.   We recorded and transcribed each of our interviews to get a better understanding of our results. 
User Survey: We completed a small survey which was release to web via Facebook.  We estimate the survey reached ~750 people with 17 completed surveys by September 9th.</h5>

           <h5>To continue learning about our users we processed our the data from our surveys using:</h5>
<h4>Affinity Map<br/>
Empathy Map<br/>
Ideation<br/>
User Matrix<br/>
We used a competitor analysis to target two of the most commonly mentioned sites from our data research, two apps that were highly ranked in the app store</h4>
</Col>
</Row>
<div className="findings">
            <section className="findings_text"><h3>What we found in our research:</h3><h4>

The biggest problem people encountered was watering plants.<br/>
Not just for aesthetics: People often have a personal relationship with their plants and relate to them on an emotional level
It is important to have a social component between users to build community.</h4><br/>
</section>
          </div>
        <Row className="push2">
        <Col lg={6} id="vp" className="gridtextbox1" > 
        <div className="greensContainer">
        <img src={greenguy} className="green" alt="green"></img>
        <img src={greengal} className="green" alt="gal"></img>
        </div>
        </Col>
        <Col lg={6} className="gridtextbox2">
          <div className="push2_text">
            <h4>We created plant avatars!</h4> <br/> <h3>Why?</h3>
            <br/> <h4>We believe that by combining a scheduling system and humanization of the plants, that we might be able to help if we help the user enjoy and be prosperous in plant care.<br/>
We might do this by creating a scheduling system (watering, repotting, fertilizing), community interaction/humanization and cataloging.  Doing this will allow our product to establish committed plant care and help users achieve healthy and prosperous plant collection.<br/></h4>

</div>
</Col>
        </Row>
          <Row className="questions">
          <Col lg={6} id="vp" className="gridtextbox1" > 
          <div className="questions_text">
             <h3>What motivates people to get plants and love them?</h3>What motivations do you think about when you select a plant to grow in your house?<br/>
What are your motivations for having plants in your home? <br/>
What are obstructions to caring for plants in your home?<br/><br/><h3>We created user personas...</h3>
          </div>
          </Col>
          <Col lg={6} className="gridtextbox3">
          <img src={boy} className="kids" alt="green"></img>
          <img src={girl} className="kids" alt="gal"></img>
          </Col>
          </Row>
    
          <Row className="now1">
          <Col lg={12}  className="gridtextbox4" > 
          <div >
            <div className="now_text">
             <h3>How do we engage the user?</h3><h2>Create a game with rewards and feedback!!!</h2><br/></div>
          </div>
          <div className="gameContainer">
          <img src={points} className="game" alt="game"></img>
          <img src={game} className="game" alt="game"></img>
          <img src={calendar} className="game" alt="game"></img>
          <img src={profile} className="game" alt="game"></img>
          </div>
          </Col>
          </Row>
          <Row className="wonder">
          <Col lg={6} className="left" maxWidth="md">
          <Player  src={plantv} fluid={false} className="player"  data-setup= '{"liveui": true, "liveTracker": false}'playing
  playIcon={<button>Play</button>}/>
          </Col>
          <Col lg={6} className="final" maxWidth="md">
            <h3>Play the Video!</h3>
            <h4>An example of our usability testing in the final stages.</h4><br/>
            <h5>Sign Up for Plantagochi</h5><br/>
            <h5>Welcome to Plantagochi</h5><br/>
            <h5>Pick an avatar</h5><br/>
            <h5>Go to Plant care</h5><br/>
             <h5>Water plant and collect</h5><br/>
             <h5>Go to Profile</h5><br/>
             <h5>Add a plant</h5><br/>
             <h5>Pick a plant avatar</h5><br/>
             <h5>Name the plant</h5><br/>
             <h5>Scedule the plantcare</h5><br/>
             
          </Col>
          </Row>
          <Row className="thoughts">
          <Col lg={12}  className="gridtextbox4" >
            <h3>After usability testing and looking forward:</h3> 
          <h4>Connect the pot to the plant.<br/> Be able to recommend the right pot.<br/>
Can you create your plantagochi prior to having the plant?<br/>
Allow users to form their own social groups within the community. <br/></h4>
          <img src={plantcare} className="care" alt="care"></img>
          </Col>
          </Row>
       <div className="last" >
         <h3 className="keep">More Projects...</h3>
         <Link to="/Govt" class="btn btn-dark" id="projects_button" alt="govt">Govt Redesigned Website</Link>
         <Link to="/Hitch" class="btn btn-dark" id="projects_button" alt="hitchhiker">Original Travel App</Link>
         <Link to="/Variety" class="btn btn-dark" id="projects_button" alt="charity">Charity Website Redesign</Link>
       </div>
       </div>
       </div>
 
    )
}
export default Case1