import React from 'react';
import './white.css';
import ducky from '../../images/projectimages/ducky5.png'





function White() {
    return (
        <div className='duckyContainer'>
            <h3 className='whitespace'>And that's all folks.</h3>
            <h3 className='white'>Coded and designed in REACT by Katelin Reilly</h3>
        <img src={ducky} alt="duck" className='ducky'></img>
        </div>
        
        )
    }
    
    export default White