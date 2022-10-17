import React, { useState } from "react";
import { Offcanvas } from 'react-bootstrap';
import { SiLinkedin , SiGithub} from 'react-icons/si'
import {FiInstagram } from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
}

function Navigation() {
    let buttonOrNav;
    const [showCanvas, setShowCanvas] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const handleClose = () => setShowCanvas(false);
    const handleOpen = () => setShowCanvas(true);
    const handleWindowResize = () => setWindowSize(getWindowSize());
    window.addEventListener('resize', handleWindowResize);

    if (windowSize <= 1000)
        buttonOrNav = <button className="m-2 nav-button" onClick={handleOpen}><GiHamburgerMenu/></button>
    else {
        buttonOrNav =
            <>
                <div className="navBar-links">
                    <a href="#about" className="linkHover">About</a>
                    <a href="#footer"  className="linkHover">Contact</a>
                    <a href="#skills" className="linkHover">Skills</a>
                    <a href="#about" className="linkHover">Resume</a>
                </div>
            </>;
    }
    
    function closeCanvas(value)
    {
        handleClose();
        setTimeout(() => {
            document.getElementById(value).scrollIntoView({behavior: 'smooth'});
        },500);
    }



    return (<>
        <div className="navBar p-3">
            <div className="d-flex justify-content-between align-items-center">
                <a href="/" className="brandName"><h1 className="ms-5 brandName">Alo</h1></a>
                {buttonOrNav}
            </div>
        </div>
        <Offcanvas id="offcanvasExample" show={showCanvas} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><h1 className="brandName sizeLogo">Alo</h1></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div className="offcan-links1">
                    <a href="#about" onClick={() =>{closeCanvas("about")}} >About</a>
                    <a href="#footer" onClick={() =>{closeCanvas("footer")}}>Contact</a>
                    <a href="#skills" onClick={() => {closeCanvas("skills")}}>Skills</a>
                    <a href="#about" onClick={() => {closeCanvas("skills")}}>Resume</a>
                </div>
                    <div className='offcan-links2'>
                        <a href='https://www.linkedin.com/in/abhijeet-lodhiyal-45a572221 '><SiLinkedin  size={25} color="#1956EE" className='m-3'/></a>
                        <a href='https://www.instagram.com/abhijeetlodhiyal/'><FiInstagram size={25} color="#CF0BEE" className='m-3'/></a>
                        <a href='https://github.com/Abhijeet-Lodhiyal'><SiGithub size={25} color="black" className="m-3"/></a>
                    </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>);

}

export default Navigation;

