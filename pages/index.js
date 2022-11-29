import Head from "next/head";
import axios from "axios";
import { API_URL } from "../utils/urls";

import Link from "next/link";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

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
              <div className="video-wrapper">
                <video
                  src={showcase.attributes.snippetvideo.data[0].attributes.url}
                  autoPlay
                  playsInline
                  muted={true}
                  loop
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
  );
}

Home.Layout= BlackLayout;