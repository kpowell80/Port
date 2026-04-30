import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import'./me.css'
import kate from"../../images/projectimages/katernew.png"
// import Zoom from 'react-reveal/Zoom';

function Me(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return(
      <motion.div
        ref={ref}
        className="about_container"
        id="about-me"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="about_content">
          <div>
        <img src={kate} alt="Katelin Reilly" loading="lazy"/>
          </div>
           <p>
I started in software development, graduating at the top of my cohort, and went on to study UX/UI at George Washington University. At Spoke, I scaled customer accounts by <span className="skills">200%+ and later led the entire account function as Head of Accounts</span>, driving growth, retention, and operational systems across the business.
<br/><br/>
What makes me different is how I work across the full picture. I don't just design experiences—I understand the customer behind them, build the systems that support them, and stay accountable to the results. I've designed in Figma, built in React and Python, and worked directly with clients to solve problems that impact revenue and long-term growth.
<br/><br/>
I bring a global perspective from traveling to 20+ countries across 6 continents, but my focus is always the same: <span className="skills">creating connections between people, systems, and ideas that actually work in the real world</span>.
</p>
        </div>
        <div className="pull-quote">
  "I don't just design interfaces—I solve problems that drive real outcomes."
</div>
            {/* </Zoom>  */}
          </motion.div>
          
    
    )
}
export default Me