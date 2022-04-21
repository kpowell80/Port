import React from 'react';
import './home.css';
import Navigation from './navigationbar/navigationBar';
import ParticleAnimation from 'react-particle-animation' 
import ParticlesBg from 'particles-bg';
import Header from './header/Header';
import Me from './me/Me';
import White from './white/White';
import Resume from './resume/Resume';
import Cards from './cards/Cards';
// import Contact from './contact/Contact';
import Bye from './bye/Bye';

function Home(){
    return(
        <div className="home">
         <Navigation/>   
            <h3>UX/UI Designer</h3>
            <section>
            <Bye/>
            </section>
         <div className="body">
           <ParticlesBg 
           type="cobweb"
           bg={true}
          //  opacity=".2"
           zIndex="-1"
           position="fixed"
           size= "100%" 
           />
        <Header/>
         <Me/>
        <Cards/>
         <Resume/>
         <White/>
         <section>
    <ParticleAnimation
    background={{ r: 21, g: 22, b: 23, a: 1 }}
    style ={{height:'45vh'}}
    numParticles={150}
    density_auto={true}
    density_area={800}
    particleSpeed={.2}
    particleRadius={1.5}
    color={{r:245, g:245,b:245, a:245}}
    />
       {/* <Bye/> */}
  </section>
  
   {/* <Contact/> */}
           
        </div>
        </div>
       
      
    )
}

export default Home