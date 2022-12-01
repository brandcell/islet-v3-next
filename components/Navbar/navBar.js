import styles from "./navBar.module.css";

import { useState, useContext,  } from "react";

import { Fragment } from "react";

import Link from "next/link";

import IsletLogo from "../../public/Islet_Logo.svg";

import Image from "next/image";

import SubMenu from "./submenu/submenu";

import { motion, AnimatePresence } from "framer-motion";

import { NavContext } from "../../contexts/navbar.context";

import HamburgerMenu from "./hamburger/hamburger.component";



const menuAnimationVariants = {
  //from top to bottom
  open: { y: [-1000, 0]},
  closed: { y: [0, -1000] }

}

const Navbar = ({color, portfolio}) => {

  const [ isMenuClicked, setMenuClicked] = useState(false)


  const toggleMenuClicked = () => {
    setMenuClicked(!isMenuClicked);
  };


  return (
    <Fragment>
          <motion.div
            variants={menuAnimationVariants}
            className={styles.animationWrapper}
            initial={false}
            animate={isMenuClicked ? "open" : "closed"}
          >
            <SubMenu />
          </motion.div>
        
  
      <div className={styles.navbarContainer} >
        <div className={styles.navbarLinks} style={portfolio && {padding:'35px 30px'}}>
          <Link href="/">
            <IsletLogo className='islet-logo'
              style={{ color: `${isMenuClicked && 'black' || color}` }}
            />
          </Link>

          <div className='menu-container-wrapper' onClick={toggleMenuClicked}>
          <HamburgerMenu color={color} clicked={isMenuClicked}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
