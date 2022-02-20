import React from 'react';
import './bye.css';
import ParticleAnimation from 'react-particle-animation' 



function Bye(){
    return(
        <div className="byes"> 
      <ParticleAnimation
 background={{ r: 21, g: 22, b: 23, a: 1 }}
 style ={{height:'45vh'}}
 particleSpeed={.2}
 particleRadius={1.5}
 interactive={true}
 color={{r:245, g:245,b:245, a:245}}
 />
    <div id="main">
      <h1 className="name">I create connections that solve design problems for the user.</h1>
        
    </div>
 </div>
      
    )
}


export default Bye
