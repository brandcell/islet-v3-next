import Head from "next/head";
import axios from "axios";
import { API_URL } from "../utils/urls";
import Image from "next/image";

import { useRef } from "react";
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

import { getShowcasePosts } from "../utils/portfolio";

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
  const portfoliosRes = await getShowcasePosts();
  return {
    props: {
      showcases: portfoliosRes,
    },
  };
}

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  max-width: 500px;
  min-width: 280px;
  margin-left: 30px;

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
  background-color: black;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 16 / 9;
  position: absolute;
  width: 80%;
`;

export default function Home({ showcases }) {
  const [isLoading, setIsLoading] = useState(false);

  const swiperRef = useRef();

  const videoRef = useRef();

  //client side effect
  // useEffect(() => {
  //   //get sessionStore
  //   swiperRef.current.swiper.autoplay.stop()

  //   console.log(videoRef)

  //   videoRef.current.play()

  //   let sessionStore = window.sessionStorage.getItem("visited");

  //   const handleComplete = () =>
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       window.sessionStorage.setItem("visited", "true");
  //       swiperRef.current.swiper.autoplay.start()

  //     }, 7500);

  //   // if not visited, run loading and change state to visited after 7 seconds
  //   if (sessionStore !== "true") {

  //     handleComplete();
  //   }

  //   //if it is true, wait 7 secs before setting it false
  //   else if (sessionStore === "true") {
  //     setIsLoading(false)
  //     setTimeout(()=>swiperRef.current.swiper.autoplay.start(),2000);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Islet Studio Video Production House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Islet Studio, a video production company based in Malaysia. Specialising in commercials, short branded stories, corporate videos and product videos. Islet Studio aims to deliver impeccable storytelling through videos"
        ></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <AnimatePresence>
        {/* only when isVisited is false */}

        {isLoading && (
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
              ref={videoRef}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
              autoPlay
              preload
              loop
              muted
              playsInline
              // preload="none"
            >
              <source src="/Waves_1.mp4" type="video/mp4" />
              <source src="/waves.webm" type="video/webm" />
            </video>
            <ImageWrapper>
              <img
                src="/Isletlogo-white.svg"
                style={{ height: "100%", width: "100%" }}
              ></img>
            </ImageWrapper>
          </LoadingDiv>
        )}
      </AnimatePresence>
      <motion.div className="slider-wrapper">
        {isLoading && (
          <div
            className="black-bg"
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              background: "black",
              zIndex: "100",
            }}
          ></div>
        )}
        <Swiper
          ref={swiperRef}
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
            delay: 10000,
          }}
          mousewheel={true}
          loop={true}
          speed={1000}
          maxBackfaceHiddenSlides={0}
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
            <SwiperSlide key={showcase.attributes.slug}>
              <Link href={`/portfolios/${showcase.attributes.slug}`}>
                <div className="video-wrapper">
                  <video
                    src={showcase.attributes.snippetVideo.data.attributes.url}
                    // src={`https://res.cloudinary.com/dal9xwai7/video/upload/f_auto,q_auto/${showcase.attributes.snippetVideo.data[0].attributes.provider_metadata.public_id}${showcase.attributes.snippetvideo.data[0].attributes.ext}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload
                  ></video>
                </div>

                <TitleWrapper>
                  <h1>{showcase.attributes.title}</h1>
                </TitleWrapper>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}

Home.Layout = BlackLayout;
