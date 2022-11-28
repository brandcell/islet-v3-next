
import styled from 'styled-components'
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../Navbar/navBar';


const StyledLinkContainer = styled.div`
  max-width: 657px;
  min-height: 38px;
  margin: auto;
  margin-bottom:25px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & a{
    font-family: Signifier;
    font-size: 20px;
    color:white;
  }
`;



function CategoryLayout({children}) {
  return (
    <>
      <Navbar color='white'/>

<div className='portfolio-page-wrapper'>
 <StyledLinkContainer>
    <Link href="/portfolios">All</Link>
    <Link href="/portfolios/category/product">Product</Link>
    <Link href="/portfolios/category/commercials">Commercial</Link>
    <Link href="/portfolios/category/documentaries">Documentaries</Link>
    <Link href="/portfolios/category/corporate">Corporate</Link>
  </StyledLinkContainer>

<AnimatePresence>
{children}
</AnimatePresence>
  
</div>
    </>
    
  )
}

export default CategoryLayout