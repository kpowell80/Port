import React from 'react';
import Typed from 'react-typed';
import './header.css';

function Header(){
    return(
        <div className="me">
            <h1 className="period">About me.</h1>
            <h3>UX/UI Designer</h3>
           
            <Typed
                strings={[
                    "",
                    "UX Designer",
                    "UI Designer",
                    "Full stack developer",
                    "",
                    "",]}
                    typeSpeed={40}
                    // backSpeed={50}
                    loop
                />
        </div>
       
      
    )
}

export default Header