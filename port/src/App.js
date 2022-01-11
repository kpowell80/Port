import './App.css';
import Navigation from './screens/navigationbar/navigationBar';
import ParticleAnimation from 'react-particle-animation' 
import ParticlesBg from 'particles-bg';
import Header from './screens/header/Header';
import Me from './screens/me/Me';
// import Projects from './screens/projects/Projects';
import Resume from './screens/resume/Resume';
import Cards from './screens/cards/Cards';
import Contact from './screens/contact/Contact';
import Bye from './screens/bye/Bye';


function App() {
  return (
 
    <div className="App">
        <div><Navigation/></div> 
         <section><Bye/></section>
         <div className="body">
           <ParticlesBg 
           type="cobweb"
           bg={true}
          //  opacity=".2"
           zIndex="-1"
           position="fixed"
           size= "100%" 
           />
        <Header></Header>
         <Me/>
         {/* <Projects/> */}
         <Cards/>
         <Resume/>
         {/* <Philosophy/>   */}
         </div>
         <section>
    <ParticleAnimation
    background={{ r: 21, g: 22, b: 23, a: 1 }}
    style ={{height:'45vh'}}
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
