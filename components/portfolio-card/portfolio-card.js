import React from "react";

import Image from "next/image";

import styled from "styled-components";

import {motion} from 'framer-motion';

import Link from "next/link";

//styled components 

const CardContainer = styled(motion.div)`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
`;

const TextContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  z-index: 10;

  & h1{
    font-family: Founders;
    color: white;
  }
`;

const ImageContainer= styled(motion.div)`
height: 100%;;
position:relative;
z-index:10;
`

const VideoContainer = styled.div`
width:100%;
height:100%;
position:absolute`

const Video= styled.video`
width:100%;
height:100%;
object-fit: cover;
z-index:5;
&:hover{
  opacity: 0;
  transition: opacity 0.5s;

}`

const StyledLink = styled(Link)`
width:100%;
height:100%;
position:absolute;
z-index:11`

//motion variants 
const textVariants = {
  rest:{
    y:-1000
  },
  hover:{
    y:-20,
    transition:{duration: 0.1,
      type: "tween",
      ease: "easeOut"}
  }
}

const imageVariants ={
  rest:{
    opacity:1
  },
  hover:{
    opacity:0,
    transition:{duration: 0.4,
      type: "tween",
      ease: "easeOut"}
  }

  }


function PortfolioCard({ portfolio, index }) {
  return (
    <CardContainer style={{gridArea:`Area-${index+1}`}} key={portfolio.id} initial='rest' whileHover='hover' animate='rest'>
      <TextContainer variants={textVariants}>
        <h1>{portfolio.attributes.title}</h1>
      </TextContainer>

      <ImageContainer variants={imageVariants}>
        <Image
          alt=''
          fill
          src={portfolio.attributes.display.data.attributes.url}
          object-fit='cover'
        />
      </ImageContainer>
      <VideoContainer>
      <Video autoPlay muted loop src={portfolio.attributes.snippetvideo.data[0].attributes.url}></Video></VideoContainer>
      <StyledLink href={`/portfolios/${portfolio.id}`}></StyledLink>
  
    </CardContainer>
  );
}

export default PortfolioCard;
