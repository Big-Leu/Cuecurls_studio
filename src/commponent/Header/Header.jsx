import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
const Header= () => {
  const [menuOpened,setMenuOpened] = useState(false);
  console.log("menuOpened:", menuOpened);
  const headerShadow = useHeaderShadow()
  const menuRef=  useRef()
  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:false,amout:0.25}}
    className={`paddings ${css.wrapper}`
  }
  style={{boxShadow:headerShadow}}
  >

      <div className={`flexCenter innerWidth ${css.container}`}>
         <div className={css.name}>
            Cuecurls studio
         </div>
         <ul 
         ref={menuRef}
         style={getMenuStyles(menuOpened)}
         className={`flexCenter ${css.menu}`}>
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}><p>+91 7290925295</p>
          <BiPhoneCall size={"40px"}/>
          </li>
         </ul>
         <div 
         className={css.menuicon}
         onClick={() => {
          console.log("Menu Icon Clicked");
          setMenuOpened((prev) => !prev)}}
         >
          <BiMenuAltRight size={30}/>
         </div>
      </div>
    </motion.div>
  )
}

export default Header