import React from 'react';
import './philosophy.css';
import Zoom from 'react-reveal/Zoom';
import Distinct from '../../images/henriclear.jpeg'


function Philosophy() {
    return (
        <div className="about" id="philosophy">
             <h1>Philosophy.</h1>
             <h3>This is the distinctive moment.</h3>
          
            <Zoom>
            <img src={Distinct} id="distinct" alt="distinct moment"/>
            </Zoom>
            <h4 id="quote">
            '"Photography is not like painting. There is a creative fraction of a second when you are taking a picture. Your eye must see a composition or an expression that life itself offers you, and you must know with intuition when to click the camera. That is the moment the photographer is creative," he said. "Oops! The Moment! Once you miss it, it is gone forever. -Cartier-Bresson"',
            </h4>
            </div>
           
    
    )
}

export default Philosophy