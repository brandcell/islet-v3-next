import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styled from "styled-components";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css/bundle";

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
    "http://localhost:1337/api/portfolios?filters[Showcase][$eq]=true&populate=*"
  );

  console.log(
    portfoliosRes.data.data[0].attributes.snippetvideo.data[0].attributes.url
  );

  return {
    props: {
      showcases: portfoliosRes.data.data,
    },
  };
}

export default function Home({ showcases }) {
  return (
    <div className="slider-wrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
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
            <video
              src={showcase.attributes.snippetvideo.data[0].attributes.url}
              autoPlay
              muted={true}
              loop
            ></video>
            </Link>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
