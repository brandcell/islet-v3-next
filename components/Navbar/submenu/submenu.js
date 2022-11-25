import styles from './submenu.module.css'
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useContext } from "react";
import { NavContext } from '../../../contexts/navbar.context';

const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: underline;
  }
`;

const linkVariants = {
  hover: {
    x: [10,-10],
    y:[0,-10],
    transition:{
      x:{
        yoyo: Infinity,
        duration:0.8
      },
      y:{
        yoyo:Infinity,
        duration:0.5
      }
    }

    }
  }

const SubMenu = () => {


  const{isMenuOpen, setMenuOpen} = useContext(NavContext)

  return (
    <div className={styles.submenuWrapper}>
      <div className={styles.submenuItemsWrapper}>
        <StyledLink  href='/portfolios'  onClick={()=>setMenuOpen(false)}>Our Work</StyledLink>
        <StyledLink  href='/about-us'  onClick={()=>setMenuOpen(false)}>About Us</StyledLink>
        <StyledLink  href='/contact-us'  onClick={()=>setMenuOpen(false)} >Contact Us</StyledLink>
        <StyledLink href='/case-studies' onClick={()=>setMenuOpen(false)}>Case Studies</StyledLink>
      </div>
    </div>
  );
};

export default SubMenu;
