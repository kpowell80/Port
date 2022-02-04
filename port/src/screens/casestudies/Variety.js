import React from "react";
import'./variety.css';
import {
  Link
} from "react-router-dom";
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import ReactPlayer from 'react-player';
import varietyvideo from '../../images/video/varietyvideo.mp4';
// import mood from '../../images/projectimages/redline2.png';
// import user from '../../images/projectimages/userpersonag.png';
// import style from '../../images/projectimages/styletile.png';

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
        <Row>
        <Col lg={6} id="vp" className="gridtextbox1" > 
        {/* <img src={redline1} className="red" alt="redline"></img>
        <img src={redline2} className="red" alt="redline"></img> */}
        </Col>
        <Col lg={6} className="gridtextbox2">
          <div className="valueProp">
            <h4>First:</h4> <br/> 
            <br/> 
            <ul>
            <h5><li> What are the main painpoints of the website?</li><br/> 
            <li> What are Variety's top objectives?</li><br/> 
           </h5>
              </ul><br/> 
  <h4>We need to 1st discover the fundamental problems with the website as is. Usability Testing!! </h4> <br/> 

</div>
</Col>
        </Row>
          <Row className="questions">
          <Col lg={6} id="vp" className="gridtextbox1" > 
          <div >
             <h3>Gorilla Interview 5 people. 5 Essential Tasks:<br/>
What is the NSA ?<br/>
Navigate to careers<br/>
Find a specific job to apply for<br/>
Register for job<br/>
Answer Prequalifications questions<br/>
We used Zoom to conduct interviews with anonymous participants<br/>
</h3>
          </div>
          </Col>
          <Col lg={6} className="gridtextbox3">
          {/* <img src={user} className="user" alt="user"></img> */}
       
          </Col>
          </Row>
          <div className="researchPlan3">
            <h3>We needed a lot of research: </h3><br/>


           <h4>Our storyboard, journey map, Executive Director interview, user testing, competitive analysis had given us our first goals, problems to identify and leads on what our customer - Variety DC wanted.</h4>
Card Sorting<br/>
Navigtation Sitemap<br/>
Ideation<br/>
User Matrix<br/>


          </div>
          <div className="findings">
            <section><h3>What we found in our research:</h3><h4>

            Our first achievement was to get a video on the home screen. This was difficult as all we initially had was a Utube link.  After much investigation and work, we were able to cut it and have it as our main banner.  This was incredibly important as the one consist positive of the website were the “smiling kids”, so we wanted to showcase that more.</h4>
{/* Add more color. Make it inspiring. </h4><br/> <h3>What to do next? Create a Mood Board...</h3>
 <img src={mood} className="mood" alt="mood"></img> */}
</section>
          </div>
          <Row className="now">
          <Col lg={12}  className="gridtextbox4" > 
          <div >
             <h3>How do we engage the user?</h3><h2>Simplifiy and Create a Style guide!!!</h2><br/>
          </div>
          {/* <img src={style} className="game" alt="style"></img> */}
         
          </Col>
          </Row>
  
          <Row className="thoughts">
          <Col lg={12}  className="gridtextbox4" >
            <h3>After usability testing and looking forward:</h3> 
          <h5>Connect the pot to the plant.<br/> Be able to recommend the right pot.<br/>
Can you create your plantagochi prior to having the plant?<br/>
Allow users to form their own social groups within the community. <br/></h5>
          </Col>
          </Row>
          <div className="last4" >
         <h3 className="keep4">More Projects...</h3>
         <Link to="/Govt" class="btn btn-dark" id="projects_button4" alt="govt">Govt Redesigned Website</Link>
         <Link to="/Hitch" class="btn btn-dark" id="projects_button4" alt="hitchhiker">Original Travel App</Link>
         <Link to="/Variety" class="btn btn-dark" id="projects_button4" alt="charity">Charity Website Redesign</Link>
       </div>
          </div>
       
       </div>
         
    
    )
}
export default Variety