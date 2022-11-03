import React from "react";
import { DiJavascript1, DiBootstrap, DiCss3, DiHtml5, DiLinux, DiNodejsSmall, DiReact, DiJava } from "react-icons/di";
import { GiLaptop } from 'react-icons/gi'
import { motion } from 'framer-motion'
function Skills() {
    return (<motion.section id="skills"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={
            {
                hidden: { opacity: 0.6 },
                visible: { opacity: 1 }
            }
        }>
        <h1 className="p-3"><GiLaptop size={45} className="mb-3" /> Skills</h1>
        <div className="container ">
            <div className="row">

                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiHtml5 size={100} color="#FF4925" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiCss3 size={100} color="#4242F7" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiJavascript1 size={100} color="#FFE900" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiJava size={100} color="#F74420" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiReact size={100} color="#1EF4ED" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiBootstrap size={100} color="#7337FC" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiNodejsSmall size={100} color="#5CC939" />
                </motion.div>
                <motion.div className="col-6 col-lg-4 p-4" whileHover={{scale : 1.3, transition:{duration : 0.5}, }}>
                    <DiLinux size={100} color="black" />
                </motion.div>
            </div>
        </div>
    </motion.section>);
}
export default Skills