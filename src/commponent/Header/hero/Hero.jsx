import React from 'react'
import css from '../../../commponent/Header/hero/Hero.module.scss'
import {motion} from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from '../../../utils/motion';
const Hero=()=> {
  return (
   <section className={`paddings ${css.wrapper}`}>
       <motion.div 
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{once:false,amount:0.25}}
       className={`innerWidth ${css.container}`}>
              <div className={css.upperElements}>
                <motion.span
                variants={fadeIn("right","tween",0.2,1)} 
                className="primaryText">
                    Hey There ,<br />We are Cuecurls studio.
                </motion.span>
                <motion.span className="secondaryText" variants={fadeIn("left","tween",0.4,1)}>
                We design beautiful simple
                <br />
                things, And we love what we do
                </motion.span>
               </div>

               {/*person image */}
                 <motion.div 
                 variants={fadeIn("up","tween",0.3,1)}
                 className={css.person}>
                  <motion.img 
                  variants={slideIn("up","tween",0.5,1.3)}
                  src="./q2.png" alt=""/>
                 </motion.div>
                 {/* email*/}
                 <motion.div 
                 variants={fadeIn("right","tween",0.5,1)}
                 className={css.email}>
                    <a className={css.email1} href="https://mail.google.com/mail/?view=cm&fs=1&to=cuecurlsstudio@gmail.com">
                    cuecurlsstudio@gmail.com
                    </a>
                 </motion.div>
               {/* lower elemets */}
               <div className={css.lowerElements}>
                 <motion.div 
                 variants={fadeIn("right","tween",0.3,1)}
                 className={css.experienece}>
                    <div className="primaryText">5</div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                 </motion.div>
                 <motion.div 
                 variants={fadeIn("left","tween",0.5,1)}
                 className={css.certificate}>
                    <img src="./l1.png" alt=""/>
                    <span>CERTIFIED PROFATIONAL</span>
                    <span>INTERIOR DESIGNER</span>
                 </motion.div>
               </div>
       </motion.div>
   </section>
  )
}

export default Hero