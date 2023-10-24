import React from 'react'
import css from './Footer.module.scss'
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion';

const Footer = () => {
    return(
  <motion.section 
  variants={staggerChildren}
  initial="hidden"
  whileInView="show"
  viewport={{once:false,amount:0.25}}
  className={`paddings  ${css.wrapper}`}>
      <motion.div 
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
         <div className={css.left}>
            <span className="primaryText">
                Let's make somethin <br /> amazing together.
            </span>
            <span className="primaryText">
                Start by<a className={css.email1} href="https://mail.google.com/mail/?view=cm&fs=1&to=cuecurlsstudio@gmail.com">
                    Saying hi
                    </a>
            </span>
         </div>
         <div className={css.right}>
           <div className={css.info}>
            <span className="secondaryText">
                Information
            </span>
            <p>I-1209 ground floor, shop, Street No.5, Hari Nagar Extn, Molar Band, Badarpur, New Delhi, Delhi 110044</p>
           </div>
           <div className={css.menu}>
               <li>Services</li>
               <li>Works</li>
               <li>Notes</li>
               <li>Experience</li>
           </div>
         </div>
      </motion.div>
  </motion.section>);
};

export default Footer