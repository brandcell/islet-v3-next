import Head from "next/head";
import axios from "axios";
import { API_URL } from "../utils/urls";
import Image from "next/image";

import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import Link from "next/link";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";

import "swiper/css/bundle";
import BlackLayout from "../components/layouts/black-layout.component";

//if need to get props server side-- for things that need to generate every time client refreshes
// export async function getServerSideProps(){

//   const portfoliosRes= await axios.get('http://localhost:1337/api/portfolios');

//   console.log(portfoliosRes.data)

//   return{
//     props:{
//       posts: portfoliosRes.data.data

//     }
//   }

// }

//if need to generate statically
export async function getStaticProps() {
  const portfoliosRes = await axios.get(
    `${API_URL}/api/portfolios?filters[Showcase][$eq]=true&populate=*`
  );

  return {
    props: {
      showcases: portfoliosRes.data.data,
    },
  };
}

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  max-width: 500px;
  min-width: 280px;
  left: 5%;

  & h1 {
    font-family: Founders;
    font-size: 60px;
    line-height: 3.75rem;
    color: white;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    bottom: 50px;
    max-width: 400px;
    & h1 {
      font-size: 48px;
    }
  }

  @media (max-width: 375px) {
    max-width: 280px;

    h1 {
      font-size: 45px;
    }
  }
`;

const LoadingDiv = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 100px;
  z-index: 200;
  
`;

const ImageWrapper= styled.div`
aspect-ratio: 16 / 9;
position: absolute;
width: 80%;
`

export default function Home({ showcases }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);

    const handleComplete = () =>
      setTimeout(() => {
        setLoading(false);
      }, 7500);

    handleComplete();

    return () => {
      handleStart;
    };
  });

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <LoadingDiv
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            <video 
              style={{ width: "100%", height: "100%", objectFit: "cover",position:'absolute' }}
              autoplay=""
              loop=""
              muted="true"
              playsinline="">
              <source src="/waves.webm" type='video/webm'/>
              </video>
              <ImageWrapper>
              <Image src='/IsletLogo-white.svg' fill></Image>
              </ImageWrapper>
            

            </LoadingDiv> 

        ) : (
          ""
        )}
      </AnimatePresence>

      <div className="slider-wrapper">
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Mousewheel,
          ]}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          mousewheel={true}
          loop={true}
          speed={1000}
          direction="vertical"
          pagination={{
            clickable: true,
            // el: ".swiper-pagination",
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '"><span class="number">' +
                (index + 1) +
                '</span><span class="circle"></span></span>'
              );
            },
          }}
        >
          {showcases.map((showcase) => (
            <SwiperSlide key={showcase.id}>
              <Link href={`/portfolios/${showcase.id}`}>
                <div className="video-wrapper">
                  <video
                    src={`https://res.cloudinary.com/dd4pxhj5s/video/upload/f_auto,q_auto/${showcase.attributes.snippetvideo.data[0].attributes.provider_metadata.public_id}${showcase.attributes.snippetvideo.data[0].attributes.ext}`}
                    autoplay=""
                    playsinline=""
                    muted="true"
                    loop=""
                  ></video>
                </div>

                <TitleWrapper>
                  <h1>{showcase.attributes.title}</h1>
                </TitleWrapper>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

Home.Layout = BlackLayout;
