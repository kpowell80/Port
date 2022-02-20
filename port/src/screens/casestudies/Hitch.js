import React from "react";
import'./hitch.css';
import {
  Link
} from "react-router-dom";
import {Row, Col} from 'react-grid-system';
import Navigation from '../navigationbar/navigationBar';
import storyboard from '../../images/projectimages/legosb.png';
import journey from '../../images/projectimages/userjourneyHH.png';
import hhusers from '../../images/projectimages/hhusers.png';
import hhuseri from '../../images/projectimages/hhuseri.png';
import hhra from '../../images/projectimages/hhra.png';
import hhgg from '../../images/projectimages/hhgg.png';

function Hitch(){
    return(
        <div className="case3" id="">
            <Navigation/>
          <div className="hero_image3">
          <div className="hero_text8">
            <h3>Case Study</h3>
            <h1>Travel App</h1>
          </div>
          </div>
        

       <div className="container-fluid2" >
          <Row >
          <Col lg={12} >
          <div className="theProject3">
<h3>The Project:</h3><h4>Hitchhiker.World. The certified dining guide to fearless travel in a post pandemic world!</h4>
<h3>The Problem:</h3><h4>Travelers are weary of where to dine and how to find “clean” restaurants/stores. He/she must use many different tools or don’t have any existing to answer his/her needs such as: where to eat, how to get there, is it safe, are there mandatory masks, are tables separated, how to get delivery, is the restaurant only allowing vaccinated,has the service dropped since Covid, is there a full menu, capacity of restaurant indoors?</h4>
<h3>The Solution:</h3> <h4>Create an app that has options of “safely certified” GG- Guarded Gate Guaranteed restaurants. Logs travelers profiles for future trips and can interact with other user’s profiles. Keeps up to date reviews on restaurant’s service stars with RA - Restaurant Alliance. Allows users to connect direct routes to restaurants.
</h4>

          </div>
          </Col>
          </Row>
          <Row className="questions5">
          <Col lg={6} id="vp" className="gridtextbox1" > 
          <div >
             <h3>Research Questions:<br/>
             What are people’s eating habits when traveling in the modern world affected by COVID?<br/>
How do they find dining options (grocery,food truck,food stalls), specifically can they find the location?<br/>
Do people want to eat out?<br/>
How does COVID limitations affect people's ability to go to certain restaurants?<br/>
Do people feel safe going to the grocery store?<br/>

</h3>
          </div>
          </Col>
          <Col lg={6} className="gridtextbox3">
          <p>In this research project, we planned and I conducted 5 interviews. The group was chosen from my circle. We started with 5 research questions. Then we came up with our interview questions.They were asked 25 questions each. A couple questions evolved along the way and are noted.
</p>
       
          </Col>
          </Row>
          <Row className="nos">
          <Col lg={6} md={12}id="vp" className="gridtextbox1" > 
        <img src={hhusers} className="user5" alt="user"></img> <br/>
        <img src={hhuseri} className="user5" alt="user"></img>
        </Col>
        <Col lg={6}  md={12}className="gridtextbox23">
          <div className="valueProp">
            <h4>We Created:</h4> <br/> 
            <br/> 
            <ul>
            <h5><li> User Questions</li><br/> 
            <li> Proto Persona</li><br/> 
            <li> User Insight</li><br/> 
            <li> Empathy Mapping </li></h5><br/> 
              </ul><br/> 
<h3>Why?</h3><br/>   <h4>We need to 1st discover the fundamental problems with the website as is. What is most valued to the user? What should the navigation process look like? </h4> <br/> 

</div>
</Col>
</Row>
            
        <Row className="pause">
            <Col  lg={6} md={12}className="realizations9">
            <h3>After the interview: </h3><br/>
           <h4>People were not as interested in food trucks and stores. It was apparent I needed to focus on the Safe and Excellence of a restaurant primarily.
What are the key findings you derived from the interview/survey? <br/><br/>
Competitor Analysis:
<br/><br/>
I then compared Hitchhiker.World to Resy, Expedia and Yelp primarily. I also looked at indirect competition like United airlines.  None of the websites had any Covid responses related to protocols or reviews.<br/><br/>
After our inital research, we created:<br/><br/>
</h4>
<h3>
User Persona<br/>
User Journey Map<br/>
StoryBoard<br/><br/>
</h3>
<h3>Why?</h3><br/>
<h4>Who are we targeting and how will they accomplish their travel needs from Hitchhiker?</h4>
</Col>
<Col  lg={6} md={12}className="">
            <img src={storyboard} className="gamey" alt="style"></img>
            <img src={journey} className="gamey" alt="style"></img>
</Col>
</Row>

<Row className="long">
<Col  lg={12} className="working">
          <div className="findings44">
            <section><h3>What we found in our research:</h3><h4>

Continued to simplify the process and focus on what the user wants. For instance, dropping the weather determinant. The user’s testing did not get that and just made the wire test more complicated. <br/> <br/>
Then the prototype testing was next, this was invaluable. I learned an incredible amount that I would have skated over. After login, because the app was new, the user still had no idea what features we were offering. Coaching screens were added. And screens explaining the product were sprinkled throughout the user’s journey. <br/>
<div className="row22">
<img src={hhra} className="user5" alt="hhra"></img>
<img src={hhgg} className="user5" alt="hhgg"></img>
</div>
Merchandising screen was created. A description of the chosen restaurant screen was added, this step further helps identify what RA an GG actually are doing in a pragmatic way. Buttons needed to be clearer. Profile link needed to be more obvious. Past and previous reservations screen was created. A default user profile screen was created, so the user is able to have the default pic option presented. The “search” feature was made more apparent, as were some directives to help guide the User.  </h4><br/>
</section>
          </div>
          </Col>
          </Row>
          <Row className="now">
          <Col lg={12}  className="gridtextbox4" > 
          {/* <div >
             <h3>How do we engage the user?</h3><h2>Simplifiy and Create a Style guide!!!</h2><br/>
          </div> */}
          {/* <img src={style} className="game" alt="style"></img> */}
         
          </Col>
          </Row>
  
          <Row className="thoughts">
          <Col lg={12}  className="gridtextbox9" >
            <h3>After usability testing:</h3> 
          <h5>Continued to simplify the process and focus on what the user wants actually. For instance, dropping the weather determinant. The user’s testing did not get that and just made the wire test more complicated. Then the prototype testing was next, this was invaluable. I learned an incredible amount that I would have skated over. After login, because the app was new, the user still had no idea what features we were offering. Coaching screens were added. And screens explaining the product were sprinkled throughout the user’s journey. Merchandising screen was created. A description of the chosen restaurant screen was added, this step further helps identify what RA an GG actually are doing in a pragmatic way. Buttons needed to be clearer. Profile link needed to be more obvious. Past and previous reservations screen was created. A default user profile screen was created, so the user is able to have the default pic option presented. The “search” feature was made more apparent, as were some directives to help guide the User. <br/></h5>
          </Col>
          </Row>
          </div>
          <div className="last3" >
         <h3 className="keep3">More Projects...</h3>
         <Link to="/Govt" class="btn btn-dark" id="projects_button3" alt="govt">Govt Redesigned Website</Link>
         <Link to="/Case1" class="btn btn-dark" id="projects_button3" alt="planta">Plantagochi</Link>
         <Link to="/Variety" class="btn btn-dark" id="projects_button3" alt="charity">Charity Website Redesign</Link>
       </div>
       </div>
      
    
    )
}
export default Hitch