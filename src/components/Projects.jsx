import React from 'react';
import {motion} from 'framer-motion'
function Projects()
{
    return (
        <motion.section id='projects'
        initial="hidden"
            whileInView="visible"
            transition={{duration:1}}
            variants={
                {
                    hidden:{opacity:0.6},
                    visible:{opacity:1}
                }
            }> 
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <a href='https://rocky-garden-87859.herokuapp.com/'><img src='' alt='site'/></a>
                        <h1>Personal Blog Site</h1>
                    </div>
                </div>
            </div>  
        </motion.section>
    );
}
export default Projects;