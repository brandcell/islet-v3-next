import { useState } from "react";

import Image from "next/image";

import styled from "styled-components";

import { animate, motion } from "framer-motion";

import Link from "next/link";

//styled components

const CardContainer = styled(motion.div)`
  position: relative;
  /* min-height: 315px; */
`;

//motion variants

const imgVariants = {
  rest: {
    opacity: 1,
  },
  hover: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const textVariants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
};

function PortfolioCard({ portfolio, index, isSocial }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <CardContainer
      onMouseOver={handleHoverIn}
      onMouseOut={handleHoverOut}
      key={index}
      initial="rest"
      whileHover="hover"
      animate="animate"
      style={{ width: "100%", height: "100%" }}
    >
      <motion.h1
        variants={textVariants}
        style={{
          position: "absolute",
          color: "white",
          zIndex: "15",
          fontFamily: "Founders",
          left: "2%",
        }}
      >
        {portfolio.attributes.title}
      </motion.h1>

      <motion.div
        variants={imgVariants}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: "10",
          objectFit: "cover",
        }}
      >
        <Image
          fill
          alt={
            portfolio.attributes.featuredImage.data.attributes
              .alternativeText || `porfolio-featured-image-${index}`
          }
          style={{ objectFit: "cover" }}
          src={portfolio.attributes?.featuredImage?.data.attributes.url}
        ></Image>
      </motion.div>

      <div style={{ position: "absolute", height: "100%", width: "100%" }}>
        <video
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src={portfolio.attributes.snippetVideo.data.attributes.url}
          // src={`https://res.cloudinary.com/dal9xwai7/video/upload/f_auto,q_auto/${portfolio.attributes.snippetVideo.data[0].attributes.provider_metadata.public_id}${portfolio.attributes.snippetvideo.data[0].attributes.ext}`}
          autoPlay={isHovered ? false : true}
          playsInline={isHovered ? false : true}
          loop={isHovered ? false : true}
          muted
          preload="none"
        ></video>
      </div>

      <Link
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "20",
        }}
        href={`/portfolios/${portfolio.attributes.slug}
        `}
      ></Link>
    </CardContainer>
  );
}

export default PortfolioCard;

/* <Image
          alt=""
          fill
          src={portfolio.attributes.display.data.attributes.url}
          object-fit="cover" */

//

//

//{portfolio.attributes.display.data.attributes.url}

//
