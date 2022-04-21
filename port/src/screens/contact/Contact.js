import React from 'react';
import { navigationLinks } from '../../helpers/navigationLinks';
import './contact.css';


function createLinks(){
    return navigationLinks.map((e,idx)=>(
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function Footer(){
    return ( 
    <div className="contact_container" id="contact">
        <div className="contact_data_links">
        <div>
            <p>San Diego, CA</p>
            <p>Katelin Reilly</p>
            <p>reillykatelin0@gmail.com</p>
            <p><a href="http://linkedin.com/in/katelin-reilly-0abb45185">linkedin.com</a></p>
        </div>
        <div>
            {createLinks()}
        </div>
        </div>
        <div style={{textAlign:'center'}}>Copyright&copy;{new Date().getFullYear()} All rights reserved</div>
    </div>

    )
}

export default Footer