import React from 'react';
import Typed from 'react-typed';
import './resume.css';
import {Container,Row, Col} from 'react-grid-system';



function Resume() {
    return (
        <div className="about55" id="resume">
           
                <h1 className="res">Experience</h1>
               
         
            
                <Container className="resumeShape">
                 
                    <Row>
                    <Col lg={6} id="summary" className="gridtextbox1">SUMMARY</Col>
                    <Col lg={6} className="gridtextbox2">
                    UX/UI Designer and Full-Stack Developer with proven Customer Success and Account Management experience. Graduated top of software development cohort. Scaled customer accounts 200%+ as Head of Accounts at Spoke while managing all client relationships, building teams, and launching international operations. Seeking Customer Success roles in tech where I can leverage design, development, and customer relationship skills to drive business outcomes.
                    <br/><br/><br/>
                    </Col>
                    </Row>
                    <Row>
                     <Col lg={6} id="experience" className="gridtextbox1">EXPERIENCE</Col>
                     <Col lg={6} className="gridtextbox2">

                     <div className="exp-title">Web Designer & Developer</div>
                     <div className="exp-company">Landscaping Company · Contract</div>
                     <div className="dates">2024 – Present</div>
                     Designed and developed a complete React website from concept to deployment. Created custom UI, brand identity system, and mobile-first responsive layouts. Delivered full redesign including content strategy, photography direction, and SEO structure.
                     <br/><br/>

                     <div className="exp-title">Head of Accounts</div>
                     <div className="exp-company">Spoke, Inc. · Austin, TX (Hybrid)</div>
                     <div className="dates">Jul 2023 – May 2024</div>
                     Responsible for all Account Managers and customer accounts. Grew annual revenue by <strong>&gt;50%</strong> within 6 months of promotion. Established company-wide financial tracking process for individual customer accounts. Launched new talent office in Guadalajara, Mexico.
                     <br/><br/>

                     <div className="exp-title">Account Executive</div>
                     <div className="exp-company">Spoke, Inc. · Austin, TX (Hybrid)</div>
                     <div className="dates">Aug 2022 – Jul 2023</div>
                     Increased portfolio revenue by <strong>200%</strong> in under 9 months. Grew customer portfolio from 4 to 19 accounts in under 12 months. Built repeatable, high-conversion proposal process. Traveled to Philippines to establish key partnerships. Promoted to Head of Accounts less than one year after joining.
                     <br/><br/>

                     <div className="exp-title">Webmaster</div>
                     <div className="exp-company">Variety – The Children's Charity</div>
                     <div className="dates">Aug 2021 – Present</div>
                     Design and maintenance of official web presence. Leading ground-up redesign focused on increasing online donations.
                     <br/><br/>

                     <div className="exp-title">Maître D'</div>
                     <div className="exp-company">Innovative Dining Group (IDG)</div>
                     <div className="dates">Jun 2004 – Mar 2015</div>
                     Optimized customer flow to achieve daily revenue targets. Balanced demanding clientele with business objectives. Achieved industry-leading &gt;98% floor allocation.
                     <br/><br/><br/>

                    </Col>
                    </Row>
                    <Row>
                     <Col lg={6} id="education"className="gridtextbox1"> EDUCATION</Col>
                     <Col lg={6} className="gridtextbox2">THE GEORGE WASHINGTON UNIVERSITY, Washington, DC, USA Certificate in User Experience / User Interface Design <br></br><br></br>
                    
                        CODING DOJO, Tysons Corner, VA, USA Certificate in Software Development</Col>

                     </Row>
                     <div className="resLink">
                     <a href="https://docs.google.com/document/d/1InoCONYut-ZqAAz4LfDimWbaWS-vjIeLNeTK2_eBkHw/edit?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-dark">Full Resume</a>
                     </div>
                    
                    
                    
              

        </Container>
          
        </div>



    )
}

export default Resume