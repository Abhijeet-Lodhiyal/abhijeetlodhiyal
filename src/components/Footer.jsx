import React from 'react';
import { SiLinkedin , SiGithub} from 'react-icons/si'
import {FiInstagram ,FiMail} from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import {RiContactsFill} from 'react-icons/ri'
import {motion} from 'framer-motion'
function Footer() {
    return (
        <motion.section id='footer'
        initial="hidden"
            whileInView="visible"
            transition={{duration:1}}
            variants={
                {
                    hidden:{opacity:0.6},
                    visible:{opacity:1}
                }
            }
            >
            <h1><RiContactsFill size={45} className="mb-3"/> Get in Touch</h1>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-3 endingCard'>
                        <h5>Thank you for visiting my portfolio ✨</h5>
                        <h5>If you have any suggestions feel free to contact me .</h5>
                        <h5>Keep exploring and keep growing .</h5>
                    </div> 
                    <div className='col-12 col-lg-3 endingCard'>
                        <h5 className='mt-5'><FiMail className='ms-2' size={27}/> abhijeetlodhiyal@gmail.com</h5>
                        <h5><BsTelephone size={25} className="ms-2 "/>  +91 9761464274</h5>
                    </div>
                    <div className='col-12 col-lg-3 endingCard addEndingCard'>
                        <a href='https://www.linkedin.com/in/abhijeet-lodhiyal-45a572221'><SiLinkedin  size={35} color="#1956EE" className='m-3'/></a>
                        <a href='https://www.instagram.com/abhijeetlodhiyal/'><FiInstagram size={35} color="#CF0BEE" className='m-3'/></a>
                        <a href='https://github.com/Abhijeet-Lodhiyal'><SiGithub size={35} color="black" className="m-3"/></a>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col mt-3'>
                            <p>Made with ❤️ by Alo</p>
                        </div>
                    </div>
                </div>
            </div>  
        </motion.section>

    );
}
export default Footer;