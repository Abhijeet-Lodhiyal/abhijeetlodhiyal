import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Footer from "./Footer";
import Projects from './Projects'

function App() {
    return (
        <>
        <Navigation />
        <Intro/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Projects />
        <Footer/>
       </>
    );
}


export default App;