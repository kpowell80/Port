import React from 'react';
import Typed from 'react-typed';
import './resume.css';
// import { CustomPlaceholder } from 'react-placeholder-image';
import Zoom from 'react-reveal/Zoom';
import {Container,Row, Col} from 'react-grid-system';



function Resume() {
    return (
        <div className="about" id="resume">
            <Zoom>
                <h1 className="res">Resume&#769;.</h1>
                <Typed
                    strings={[
                        "",
                        "Bootcamps",
                        "Trainings",
                        "Web Master",
                        "Styling",
                        "Maitre 'D",
                        "",
                        "",]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
                {/* <CustomPlaceholder className="custom" id="shadow"

                    width={500}
                    height={500}
                    backgroundColor="#f5f5f5"
                    // border="3px solid #444444"
                    textColor="#444444"
                    text="
                    Katelin E. Reilly 910 Cameron Street
                    Alexandria VA 22314 +1-323-810-4787 reillykatelin0@gmail.com
                    SUMMARY
                    Applying core software development knowledge (e.g., JavaScript, C#, React.js, HTML/CSS) and superior customer engagement experience to develop applications that provide superior user experiences.
                    EXPERIENCE
                    VARIETY THE CHILDREN’S CHARITY August 2021-Present NATIONAL CAPITAL REGION
                    Variety is an international non-profit that has served children with disabilities since 1927. It provides a range of vital life-changing equipment and services for mobility, independence and social inclusion to individual children and children’s organizations.
                    Webmaster (August 2021 - Present)
                    Responsible for the design and maintenance of the official web presence for Variety’s National Capital Region branch. Currently leading a ground up redesign of the site with a focus on increasing online donations.
                    · Held multiple interviews with key stakeholders from across Variety and its donors ·
                    INNOVATIVE DINING GROUP (IDG) June 2004-March 2015 Restaurant holding group focused on high-end dining experiences, primarily in the greater Los Angeles, CA area. Generates >$75M in annual revenue across multiple brands, with BOA Steakhouse its flagship generating >$15M in annual revenue from its West Hollywood, CA location.
                    Maitre’d (June 2004 – March 2015)
                    Responsible for optimizing customer flow to achieve daily revenue targets. Routinely balanced satisfying very demanding clientele with meeting business objectives. Typically achieved an industry-leading >98% floor allocation on any given evening.
                    · [Bullet] · [Bullet]
                    NEIMAN MARCUS – STUDIO SERVICES May 2004 – July 2005 American chain of luxury department stores that generates >$5B in annual revenue. Studio services provides boutique styling consulting to very high net worth individuals and TV/Movie production companies.
                    Stylist (May 2004 – July 2005)
                    Provided styling expertise to A-List television and movie stars
                     
                     EDUCATION
                    THE GEORGE WASHINGTON UNIVERSITY, Washington, DC, USA Certificate in User Experience / User Interface Design
                    CODING DOJO, Tysons Corner, VA, USA Certificate in Software Development
                    ADDITIONAL INFORMATION
                    Down Dog Yoga Studio, Herndon, Virginia, USA
                    200 Hour Yoga Teaching Certificate
                    Yoga Works Studio, Richmond, VA, USA 200 Hour Yoga Teaching Certificate
                    January 2022 April 2019
                    2018 2017"


                /> */}
            </Zoom>
            
                <Container className="resumeShape">
                   
                    {/* <div className="info"> Katelin E. Reilly <br></br> 910 Cameron Street<br></br> 
                    Alexandria VA 22314 +1-323-810-4787 <br></br>  reillykatelin0@gmail.com
                    </div> */}
                    <Row>
                    <Col lg={6} id="summary" className="gridtextbox1" > - SUMMARY</Col>
                    <Col lg={6} className="gridtextbox2">
                    Applying core UX/UI knowledge (e.g., Figma, Adobe X, React.js, HTML/CSS) and superior customer engagement experience to develop applications that provide superior user experiences. <br></br><br></br><br></br><br></br>
                    </Col>
                    </Row>
                    <Row>
                     <Col lg={6} id="experience"className="gridtextbox1">- EXPERIENCE</Col>
                     <Col lg={6} className="gridtextbox2">
                    <div className="title">UX DESIGNER</div> <br></br> 
                    Mind Work <div className="dates"> January 2022-Present</div> 
                    Responsible for the research to rebuild website for more advanced targeting, greater impact and usability testing.
                     <br></br><br></br>
                     WEBMASTER <br></br><br></br>
                    Variety - The Children's Charity<div className="dates"> August 2021-Present</div>
                    Responsible for the design and maintenance of the official web presence for Variety’s National Capital Region branch. Currently leading a ground up redesign of the site with a focus on increasing online donations.
                    <br></br><br></br><br></br>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={6}id="word"className="gridtextbox1">- WORK</Col>
                    <Col lg={6} className="gridtextbox2">
                    PROPERTY MANAGER<br></br><br></br>
                   Consultant <div className="dates">June 2020-Present</div>
                    Responsible for optimizing target pricing with changing environments and seasons. Creating and facilitating strong guest relations. Executing guest continuing and demanding needs and wants daily, weekly, monthly. Marketing property and gaining viewers. Creating home design that is visually appealing and physically attractive.
                  <br></br> <br></br>
                     MAITRE’D<br></br><br></br>
                    Innovative Dining Group(IDG) <div className="dates">June 2004-March 2015</div>
                    Responsible for optimizing customer flow to achieve daily revenue targets. Routinely balanced satisfying very demanding clientele with meeting business objectives. Typically achieved an industry-leading >98% floor allocation on any given evening.
                  <br></br> <br></br>
                    STYLIST <br></br><br></br>
                    Neiman Marcus – Studio Services <div className="dates">  May 2004 – July 2005</div>
                    Provided styling expertise to movie and tv studios. Created VIP clientele list. 
                    <br></br><br></br><br></br>
               
                    </Col>
                    </Row>
                    <Row>
                     <Col lg={6} id="education"className="gridtextbox1">- EDUCATION</Col>
                     <Col lg={6} className="gridtextbox2">THE GEORGE WASHINGTON UNIVERSITY, Washington, DC, USA Certificate in User Experience / User Interface Design <br></br><br></br>
                    
                        CODING DOJO, Tysons Corner, VA, USA Certificate in Software Development</Col>

                     </Row>
                     <div className="resLink">
                     <a href="https://docs.google.com/document/d/1DgrqMZmE4A2eAhr_XUF2Wzz8qZr0MGcULPRUS_Th640/edit?usp=sharing" class="btn btn-dark">Full Resume</a>
                     </div>
                    
                    
                    
              

        </Container>
          
        </div>



    )
}

export default Resume