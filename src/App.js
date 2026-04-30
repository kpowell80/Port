import React from 'react'
import './App.css';
// import Navigation from './screens/navigationbar/navigationBar';
import Footer from './screens/contact/Contact'
import Cards from './screens/cards/Cards';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from './screens/Home';
import Case1 from "./screens/casestudies/Case1";
import Govt from "./screens/casestudies/Govt";
import Hitch from "./screens/casestudies/Hitch";
import Variety from "./screens/casestudies/Variety";


function App() {
  return (
   
 
    <div className="App">
      <Router>
        {/* <div><Navigation/></div>  */}
      <ScrollToTop/>
   <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/Cards" element={<Cards/>}></Route>
          <Route path="/Case1" element={<Case1/>}></Route>
          <Route path="/Govt" element={<Govt/>}></Route>
          <Route path="/Hitch" element={<Hitch/>}></Route>
          <Route path="/Variety" element={<Variety/>}></Route>
          </Routes>
  </Router>
  <Footer></Footer>
   </div>
  
  );
}

export default App;
