import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navigationLinks} from '../../helpers/navigationLinks'


function createlinks(){
    return navigationLinks.map((e,idx)=>(
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar(){
    return(
        <div id="home">
           <Navbar className="navi_container" 
           style={{zIndex:2, position:'fixed', top:'0',width:'100%'}} 
           collapseOnSelect 
           expand="md">
               <Navbar.Brand style={{marginLeft:'2rem'}} href="#home">Katelin Reilly</Navbar.Brand>
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