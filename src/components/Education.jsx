import React from 'react';
import {FaBook} from 'react-icons/fa'
import {motion} from 'framer-motion'
function Education() {
    return (
        <motion.section id="education"
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
            <h1><FaBook className='mb-3' size={45}/>  Education</h1>
            <div className='container'>
                <div className='row'>
                    <div className='edu1 col-12 p-3'>
                        <a href='https://www.stjosephscollege.in/'><img src='https://www.yayskool.com/images/school/s-t-josephs-college-nainital-837713247.png' alt="school" /></a>
                        <h2 className='edu1-textMain'>Secondary(ICSE) and Higher Secondary(ISC)</h2>
                        <p >St Joseph's College , Nainital</p>
                        <h3>2009 - 2021 (Completed)</h3>
                    </div>
                    <div className='edu2 col-12 p-3'>
                        <a href='https://www.geu.ac.in/'><img src='https://www.euttaranchal.com/icms/cms-photos/Graphic-Era-University.webp' alt="college" /></a>
                        <h2 className='edu2-textMain'>Bachelor's of Technology , Computer Science</h2>
                        <p className='edu2-text'>Graphic Era (Deemed to be University)</p>
                        <h3 className='edu2-text'>2021-2025 (Ongoing)</h3>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Education;