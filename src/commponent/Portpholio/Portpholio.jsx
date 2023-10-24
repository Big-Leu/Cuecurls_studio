import React from 'react'
import css from './Portpholio.module.scss'
import {motion} from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'
const Portpholio = () => {
  return (
   <motion.section 
   variants={staggerChildren}
   initial="hidden"
   whileInView="show"
   viewport={{once:false,amount:0.25}}
   className={`paddings ${css.wrapper}`}>

    <a className="anchor" id="portfolio"></a>
    <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
            <div>
                <span className="primaryText">
                    My Latest Works
                </span>
                <p style={{marginTop:"10px"}}>
                Creating the Perfect Experience for Your Interior Design
                </p>
            </div>
            <div>
                <span className="secondaryText">
                    Explore More Works
                </span>
            </div>
        </div>

        {/* images */}
        <div className={`flexCenter ${css.showCase}`}>
            <motion.img
            variants={fadeIn("up","tween",0.5,0.6)}
            src="./s1.jpg"
            alt="project"
            />
            <motion.img
            variants={fadeIn("up","tween",0.7,0.6)}
            src="./s2.jpg"
            alt="project"
            />
            <motion.img
            variants={fadeIn("up","tween",0.9,0.6)}
            src="./s3.jpg"
            alt="project"
            />

        </div>
    </div>

   </motion.section>
  )
}

export default Portpholio