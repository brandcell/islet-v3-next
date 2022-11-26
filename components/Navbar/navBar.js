import styles from "./navBar.module.css";

import { useState, useContext } from "react";

import { Fragment } from "react";

import Link from "next/link";

import IsletLogo from "../../public/Islet_Logo.svg";

import Image from "next/image";

import MenuButton from "./menu-icon/menu-icon.component";

import SubMenu from "./submenu/submenu";

import { motion, AnimatePresence } from "framer-motion";

import { NavContext } from "../../contexts/navbar.context";
import HamburgerMenu from "./hamburger/hamburger.component";

const Navbar = () => {
  const { isMenuOpen, setMenuOpen } = useContext(NavContext);

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.animationWrapper}
            // initial={{ }}
            animate={{ y: [-1000, 0] }}
            exit={{ y: [0, -1000] }}
          >
            <SubMenu />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.navbarContainer}>
        <div className={styles.navbarLinks}>
          <Link href="/">
            <IsletLogo className='islet-logo'
              style={{ color: `${isMenuOpen && 'black' || 'white'}` }}
            />
          </Link>

          <div className='menu-container-wrapper' onClick={toggleMenuOpen}>
          <HamburgerMenu />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
