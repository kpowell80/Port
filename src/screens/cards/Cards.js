import React, {useState, useRef} from "react";
import './cards.css';
import {useSpring,animated} from "react-spring";
import { motion, useInView } from 'framer-motion';
import cards from "../../helpers/cardsLinks";
import Typed from 'react-typed';
import Row from 'react-bootstrap/Row';
import {
  Link
} from "react-router-dom";
// import Case1 from "../casestudies/Case1";


function Card() {
  const [show, setShown] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (

    <div className="container-fluid p-5 bg-light" id="projects" ref={containerRef}>
    <h1 className="projects">Selected Work</h1>
      <p className="projects-github">
         <a href="https://github.com/kpowell80" id="git" target="blank" rel="noreferrer">github.com/kpowell80</a>
      </p>
    <Row className="across">
    {cards.map((card, index)=>(
    <motion.div
      className="cardContainer col-xl-3 lg-3 col-md-6 col-sm-12"
      key={card.id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
    <animated.div className={`one ${card.featured ? 'featured-card' : ''} ${card.comingSoon ? 'coming-soon-card' : ''}`}
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
                {card.featured && <span className="featured-badge">Latest Work</span>}
                {card.comingSoon && <span className="coming-soon-badge">Live Build</span>}
                <div className="card-image-container">
                  <img
                    className="img_g1"
                    src={card.image}
                    id="img1b"
                    alt={card.title}
                    loading="lazy"
                  />
                  <div className="card-hover-overlay">
                    <div className="hover-overlay-content">
                      <span className="overlay-year">2024</span>
                      <div>
                        {card.tags && card.tags.map((tag, idx) => (
                          <span key={idx} className="overlay-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-tags">
                  {card.tags && card.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h5 className="card-title">{card.title}</h5>
                <ul className="card-text" style={{alignContent:"center"}}>
                  <li>{card.li1}</li>
                  <li>{card.li2}</li>
                  <li>{card.li3}</li>
               </ul>
               {card.impact && <p className="card-impact">{card.impact}</p>}
               <Link to={card.connect} className="btn btn-dark" alt={card.title}>
                 {card.comingSoon ? 'Learn More' : card.featured ? 'View Project' : 'Full Case Study'}
               </Link>

               </animated.div>
               </motion.div>
    ))}
   
         </Row>
    </div>     
       
  );
          


}
export default Card;