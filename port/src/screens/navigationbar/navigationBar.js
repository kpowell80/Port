import React from 'react';
import './navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {navigationLinks} from '../../helpers/navigationLinks';
import unsolved from"../../images/projectimages/noshadow9u.png";
import solutions from"../../images/noblusolv10.png";
// import Image from 'react-bootstrap/Image';
import HoverImage from "react-hover-image";


function createlinks(){
    return navigationLinks.map((e,idx)=>(
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function Solve(e) {
    e.target.setAttribute('src', {solutions} );
    e.target.setAttribute('alt', 'cube');
  }

function NavigationBar(){
    return(
        <div id="home">
           <Navbar className="navi_container" 
           style={{zIndex:20000000, position:'fixed', top:'0',width:'100%'}} 
           collapseOnSelect 
           expand="md">
               <Navbar.Brand style={{marginLeft:'2rem'}} href="#home">
         
               <HoverImage src={unsolved} className="logo" style={{display: 'inline-block'}} hoverSrc={solutions} onClick={Solve}></HoverImage>
                <span className="small" style={{display:'inline-block'}}>Katelin Reilly</span>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav"/>
               <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight:'2rem'}}>
                    <Nav className="links"style={{margin:'1rem'}}>
                      {createlinks()}  
                    </Nav>
               </Navbar.Collapse>

           </Navbar>
        </div>
    )
}
export default NavigationBar