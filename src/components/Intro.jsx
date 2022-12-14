import React from "react";  
import myImg2 from  "../images/myImg2.jpg";
import Typed from "react-typed";
function Intro()
{
    return(
        <section id="intro">
            <div className="container intro-container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 myIntro pb-5">
                        <h2 >HI !</h2>
                        <h1 > I AM ABHIJEET.</h1>
                        <h3><Typed strings={['A WEB DEVELOPER','A SOFTWARE DEVELOPER','A STUDENT']}
                            typeSpeed={60}
                            backSpeed={60}
                            loop></Typed></h3>
                    </div>
                    <div className="col-12 col-lg-6 p-2">
                        <img src={myImg2} alt="myimage"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;