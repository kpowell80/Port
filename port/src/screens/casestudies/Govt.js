import React from "react";
import'./govt.css';
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import redline1 from '../../images/projectimages/redline1.png';
import redline2 from '../../images/projectimages/redline2.png';
import user from '../../images/projectimages/userpersonag.png';
import style from '../../images/projectimages/styletile.png';
import mood from '../../images/projectimages/moodboard.png';
import site from '../../images/projectimages/Sitemap.png';
import before from '../../images/projectimages/before.png';
import after from '../../images/projectimages/After.png';
import {
  Link
} from "react-router-dom";


function Govt(){
    return(
        <div className="case2" id="">
           <Navigation/>
          <div className="hero_image2">
          <div className="hero_text">
            <h3>Case Study</h3>
            <h1>Govt Website Redesign</h1>
          </div>
          </div>
       <div className="container-fluid2" >
          <Row >
          <Col lg={12} >
          <div className="theProject2">
<h4>The Project:</h4><h5>To find the pain points of a user to the govt application process and is looking to find a new career at the NSA.<br/></h5>
<br/><h4>Problem Statement:</h4><h5>A job seeker new to govt work, will have a hard time navigating, understanding and finding information on the website.<br/></h5>
{/* <h4>The Solution:</h4> <h5>With the assistance of an app, indoor plant care can be made simple and attainable for even the novice plant owner.</h5> */}

          </div>
          </Col>
          </Row>
        <Row>
        <Col lg={6} id="vp" className="gridtextbox1" > 
        <img src={redline1} className="red" alt="redline"></img>
        <img src={redline2} className="red" alt="redline"></img>
        </Col>
        <Col lg={6} className="gridtextbox2">
          <div className="valueProp2">
            <h4>We Created:</h4> <br/> 
            <br/> 
            <ul>
            <h5><li> Wireflow for current Website</li><br/> 
            <li> RedLine Annotations</li><br/> 
            <li> Priority Matrix</li><br/> 
            <li> Navigation Sitemap</li></h5><br/> 
              </ul><br/> 
<h3>Why?</h3><br/>   <h4 className="yep">We need to 1st discover the fundamental problems with the website as is. What is most valued to the user? What should the navigation process look like? </h4> <br/> 

</div>
</Col>
        </Row>
          <Row className="questions2">
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
          <img src={user} className="user" alt="user"></img>
          <h4>User Persona</h4>
       
          </Col>
          </Row>
          <Row className="research2">
            <Col lg={6} id="vp" className="gridtextbox1">
              <img src={site} className="site" alt="site pic"></img>
            </Col>
            <Col lg={6} className="gridtextbox3">
          <div >
            <h3>We needed a lot of research: </h3><br/>
Usability Testing <br/>
           <h4>To continue learning about our users we processed our the data from our surveys using:</h4>
Card Sorting<br/>
Navigtation Sitemap<br/>
Ideation<br/>
User Matrix<br/>
          </div>
          </Col>
          </Row>
          <div className="findings2">
            <section className="found" ><h3>What we found in our research:</h3><h4>

            We broke down the testing and found users thought the webiste was "scary", "confusing" and "not helpful"
Add more color. Make it inspiring. </h4><br/><h3>What to do next? Create a Mood Board...</h3>
</section>
 <img src={mood} className="mood" alt="mood"></img>

          </div>  
          <div className="now2" >
          <section className="found">
             <h3>How do we engage the user?</h3><h2>Simplifiy and Create a Style guide!!!</h2><br/>
          <img src={style} className="game" alt="style"></img>
         </section>
         </div>
          <Row className="thoughts">
          <Col lg={6}  className="gridtextbox7" >
            <h3>After usability testing and looking forward:</h3> 
          <h5>Before and After</h5>
          </Col>
          <Col lg={6}  className="gridtextbox5" >
            <img src={before} className="before" alt="screen"></img>
            <img src={after} className="after" alt="screen"></img>
          </Col>
          </Row>
          </div>
          <div className="last2" >
         <h3 className="keep">More Projects...</h3>
         <Link to="/Hitch" class="btn btn-dark" id="projects_button2" alt="hitchhiker">Original Travel App</Link>
         <Link to="/Variety" class="btn btn-dark" id="projects_button2" alt="charity">Charity Website Redesign</Link>
         <Link to="/Case" class="btn btn-dark" id="projects_button2" alt="case">Plantagochi</Link>
       </div>
       </div>
         
    
    )
}
export default Govt