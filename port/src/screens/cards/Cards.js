import React, {useState} from "react";
import './cards.css';
import {useSpring,animated} from "react-spring";
import cards from "../../helpers/cardsLinks";
import Typed from 'react-typed';
import Row from 'react-bootstrap/Row';
import {
  Link
} from "react-router-dom";
// import Case1 from "../casestudies/Case1";


function Card() {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    
    <div className="container-fluid  p-5 bg-light" >
    <h1 className="projects" >Projects.</h1> 
     <p className="hi"> <Typed 
           strings={[
               "",
               "Government Agency Web Redesign",
               "Children's Charity Web Redesign",
               "Plantagochi Plant Watering App",
               "Covid Safe Travel App",
               "",
               "",]}
               typeSpeed={40}
               backSpeed={50}
               loop 
           />
     </p>
      <p className="projects">My Github Page. <br></br>
         <a href ="https://github.com/kpowell80" id="git" target="blank" rel="noreferrer"> github.com/kpowell80</a>
      </p>
    <Row>
    {cards.map(card=>(
    <div className="cardContainer col-xl-3 lg-3 col-md-6 col-sm-12 " key={card.id}>
    <animated.div className="one"
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
                <img className="img_g1" src={card.image} id="img1b" alt="web"/>
                <h5 className="card-title">{card.title}</h5>
                <ul className="card-text" style={{alignContent:"center"}}> 
                  <li>{card.li1}</li>
                  <li>{card.li2}</li>
                  <li>{card.li3}</li>
               </ul>
               <Link to={card.connect} className="btn btn-dark" alt="govt">Full Case Study</Link>
 
               </animated.div> 
               </div>
    ))}
   
         </Row>
    </div>     
       
  );
          


}
export default Card;