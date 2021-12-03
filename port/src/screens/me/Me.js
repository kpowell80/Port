import React from 'react';
import'./me.css'
import person from"../../images/henriclear.jpeg"
import Zoom from 'react-reveal/Zoom';

function Me(){
    return(
      <div className="about_container" id="about-me">
         
          <div className="awesome">
           <Zoom>
              <p>
                  <h4 className="h4">Bio.</h4>
           
            I am a <span className="skills">UX/UI designer with a particular passion in research and ideation.</span> The skills I have learned through my GW bootcamp are (but not limited to): <span className="skills">Research, Ideation, Prototyping, Usability testing, Empathy mapping.</span> The tools I have developed range from Figma, Miro, Adobe XD to Trello. This coupled with my previous coding bootcamp knowledge of React, Python, C#, Java have given me a fantastic learning environment. I am ready to put it all to work.I love to learn. I am eager to grow. <span className="skills"></span>I have a lifetime of fine tuned interpersonal communication skills. I enjoy team engagement. I will always work harder, stay later and ask questions. Life is meant to be lived and work should be an invaluable and rewarding aspect of achieving that goal!</p>
            </Zoom> 
          </div>
          <div>
              <Zoom>
        <img src={person} alt="pic of lady"/>
        </Zoom>
          </div>
      </div>
    )
}
export default Me