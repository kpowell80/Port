
import './App.css';
import Navigation from './screens/navigationbar/navigationBar';
import Typed from 'react-typed';
import ParticleAnimation from 'react-particle-animation' 
import Header from './screens/header/Header';
import Me from './screens/me/Me';
import Projects from './screens/projects/Projects';
import Resume from './screens/resume/Resume';
import Contact from './screens/contact/Contact';
import Bye from './screens/bye/Bye';

function App() {
  return (
 
    <div className="App">
         <Navigation/> 
         <Bye/>
         <ParticleAnimation
    background={{ r: 21, g: 22, b: 23, a: 1 }}
    style ={{height:'35vh'}}
    particleSpeed={.2}
    particleRadius={1.5}
    interactive={true}
    color={{r:245, g:245,b:245, a:245}}
    />
    <Header></Header>
         <Me/>
         <Projects/>
         <Resume/>
  <section>     
    <Typed className="string"
        strings={[
            '',
            '"Photography is not like painting," Cartier-Bresson told the Washington Post in 1957. "There is a creative fraction of a second when you are taking a picture. Your eye must see a composition or an expression that life itself offers you, and you must know with intuition when to click the camera. That is the moment the photographer is creative," he said. "Oops! The Moment! Once you miss it, it is gone forever.".',
            '',
            '',
        ]}
            typeSpeed={70}
            backSpeed={50}
            loop
            />

    <ParticleAnimation
    background={{ r: 21, g: 22, b: 23, a: 1 }}
    style ={{height:'70vh'}}
    particleSpeed={.2}
    particleRadius={1.5}
    color={{r:245, g:245,b:245, a:245}}
    />
  </section> 
   <Contact/>
   </div>
  );
}

export default App;
