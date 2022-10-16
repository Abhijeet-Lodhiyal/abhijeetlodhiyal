import React from "react";
import { DiJavascript1, DiBootstrap, DiCss3, DiHtml5, DiLinux, DiNodejsSmall, DiReact, DiJava } from "react-icons/di";
import {GiLaptop} from 'react-icons/gi'
import {motion} from 'framer-motion'
function Skills() { 
    return (<motion.section id="skills"
    initial="hidden"
            whileInView="visible"
            transition={{duration:1}}
            variants={
                {
                    hidden:{opacity:0.6},
                    visible:{opacity:1}
                }
            }>
        <h1 className="p-3"><GiLaptop size={45} className="mb-3"/> Skills</h1>
        <div className="container">
            <div className="row row-cols-2 ">

                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiHtml5 size={90} color="#FF4925" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#FF4925", width: "90%", height: "20px", borderRadius: "15px" }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiCss3 size={90} color="#4242F7" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#4242F7", width: "70%", height: "20px", borderRadius: "15px" }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiJavascript1 size={90} color="#FFE900" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#FFE900", width: "60%", height: "20px", borderRadius: "15px" }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiJava size={90} color="#F74420" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#F74420", width: "50%", height: "20px", borderRadius: "15px" }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiReact size={90} color="#1EF4ED" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#1EF4ED", width: "60%", height: "20px", borderRadius: "15px" }}></div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiBootstrap size={90} color="#7337FC" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#7337FC", width: "70%", height: "20px", borderRadius: "15px" }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                        <DiNodejsSmall size={90} color="#5CC939" />
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "#5CC939", width: "55%", height: "20px", borderRadius: "15px" }}></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <div className="progress-container">
                    <DiLinux size={90} color="black"/>
                        <div className="progress-bar">
                            <div style={{ backgroundColor: "black", width: "55%", height: "20px", borderRadius: "15px" }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </motion.section>);
}
export default Skills;