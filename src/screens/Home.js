import React from 'react';
import './home.css';
import Navigation from './navigationbar/navigationBar';
import Header from './header/Header';
import Me from './me/Me';
import White from './white/White';
import Resume from './resume/Resume';
import Cards from './cards/Cards';
import Skills from './skills/Skills';
import ScrollToTop from '../components/ScrollToTop';
// import Contact from './contact/Contact';
import Bye from './bye/Bye';

function Home(){
    return(
        <div className="home">
         <Navigation/>
            <section>
            <Bye/>
            </section>
         <div className="body">
        <main id="main-content">
        <Header/>
         <Me/>
        <Cards/>
         <Skills/>
         <Resume/>
         <White/>
        </main>
        </div>
        <ScrollToTop />
        </div>


    )
}

export default Home