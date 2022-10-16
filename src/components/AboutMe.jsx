import React from 'react';
import myImg from '../images/myImg.jpg'
import {FaUserAlt } from 'react-icons/fa'
import myResume from '../data/myResume.pdf'
import {motion} from 'framer-motion'


function AboutMe() {
    return (

        <motion.section id="about"
        initial="hidden"
        whileInView="visible"
        transition={{duration:1}}
        variants={{
            visible:{opacity:1},
            hidden:{opacity:0.6}
        }}
        >
            <h1 className='p-5'><FaUserAlt size={45} className='mb-3'/>  About Me</h1>
            <div className='container aboutPage'>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6 p-3'>
                        <img src={myImg} alt='rami'>
                        </img>
                    </div>
                    <div className='col-12 col-lg-6 p-3 text-center'>
                        <p>A web developer , an upcoming software developer  and forever a student.
                            I am passionate about learning new things and exploring new technologies . I want to push myself to the limits and find out what milestones I can accomplish . </p>
                            <a href={myResume} target="_blank" rel="noreferrer"><button className='mt-3 resume'>Resume</button></a>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default AboutMe;



