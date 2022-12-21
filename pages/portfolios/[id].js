import axios from "axios";
import Head from "next/head";
import { API_URL } from "../../utils/urls";
import styled from "styled-components";
import TwoColumn from "../../styles/twocolumn.styles";
import { useRouter } from "next/router";
import { useState , useRef} from "react";
import { AnimatePresence, motion } from "framer-motion";

export async function getStaticPaths() {
  const res = await axios.get(`${API_URL}/api/portfolios?populate=%2A`);

  const portfolios = await res.data.data;

  const paths = portfolios.map((port) => ({
    params: { id: port.id.toString() },
  }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${API_URL}/api/portfolios/${params.id}?populate=*`
  );

  const portfolioData = await res.data.data;

  return {
    props: {
      portfolioData,
    },
  };
}

const VideoContainer = styled.div`
  aspect-ratio: 16/9;
  @supports not (aspect-ratio: 16 / 9) {
    height: auto;
    width: 100vw;
  }
  position: sticky;
  top: 0px;
  width: 100vw;
`;

const VideoDetailsContainer = styled.div`
  height: auto;
  width: 100vw;
  z-index: 200;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 40px 50px rgb(0 0 0 / 95%);

  & h1 {
    font-family: Founders;
    font-size: 68px;
    font-weight: 100;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 280px;
  width: 80%;
  max-width: 1140px;

  & h1 {
    font-size: 68px;
    line-height: 65px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    width: auto;

    & h1 {
      font-size: 45px;
      line-height: 45px;
    }
  }
`;

const BackgroundWrapper = styled.div`
  background-color: black;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  min-width: 314px;
  margin-right: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    min-width: 0;
  }

  & h1 {
    font-family: Signifier;
    font-size: 22px;
    font-weight: 100px;
    line-height: 33px;
    width: 100%;
    margin-bottom: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
      min-width: 200px;
    }
  }

  & p {
    font-family: Founders;
    font-size: 32px;
    line-height: 35.5px;
    font-weight: 100;
    width: 100%;
    margin: 0;
  }
`;

export const MetaWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 131px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;

const Unmute = styled(motion.div)`
  position: absolute;
  height: 50px;
  right: 3%;
  top:50%;
  z-index: 1000;

  @media (max-width:768px) {
    top: 35%;

  }

  @media (max-width:500px) {
height:20px;
top: 20%;
display: none;

    
  }
`;

export default function Portfolio({ portfolioData }) {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  const [isMuted, setIsMuted] = useState(false)

  const router = useRouter();

  //create a ref object to be passed as ref 
 
  // mute the actual video when clicked 

  //   // targetVideo.current.removeAttribute('muted')

  // }

  return (
    <> 
 
    
    <motion.div
    key={portfolioData.id}
    initial={{ y: 0 }}
    animate={{ y: [1000, -20] }}
    exit={{ y: [0, 1000] }}
    className={`portfolio-page ${
      portfolioOpen ? "enter-portfolio" : "exit-portfolio"
    }`}
  >

  { isMuted ? 
  //music button
  <Unmute
      onClick={()=>setIsMuted(!isMuted)}
      initial={{ scale: 1 }}
      whileInView={{ scale: 1.3 }}
      transition={{
        yoyo: 3,
        duration: 1,
      }}
      whileHover={{
        scale: 1,
        transition: {
          type: "tween",
        },
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="/music_icon.svg"
      ></img>
    </Unmute>: <Unmute
      onClick={()=>setIsMuted(!isMuted)}
      initial={{ scale: 1 }}
      whileInView={{ scale: 1.3 }}
      transition={{
        yoyo: Infinity,
        duration: 1,
      }}
      whileHover={{
        scale: 1,
        transition: {
          type: "tween",
        },
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="/muted.svg"
      ></img>
    </Unmute>
  }

    <div
      className="back-button-container"
      onClick={() => {
        router.back();
      }}
    > 
    
    
      <div className="back-button-wrapper">
        <span className="first-line"></span>
        <span className="second-line"></span>
      </div>
    </div>
    <Head>
      <title>{portfolioData.attributes.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
    </Head>

    <br />
    <VideoContainer>
      <VideoPlayer
        src={`https://res.cloudinary.com/dd4pxhj5s/video/upload/f_auto,q_auto/${portfolioData.attributes.fullvideo.data.attributes.provider_metadata.public_id}${portfolioData.attributes.fullvideo.data.attributes.ext}`}
        autoPlay
        loop
        muted = {isMuted ? true : false  }
        playsInline
        controls
        preload="none"
      ></VideoPlayer>
    </VideoContainer>

    <VideoDetailsContainer>
      <BackgroundWrapper>
        <DetailsWrapper>
          <h1>{portfolioData.attributes.title}</h1>
          <MetaWrapper>
            <TextWrapper>
              <h1>Client</h1>
              <p>{portfolioData.attributes.client}</p>
            </TextWrapper>
            <TextWrapper>
              <h1>Type</h1>
              <p>
                {portfolioData.attributes.categories.data[0].attributes.title}
              </p>
            </TextWrapper>
            <TextWrapper>
              <h1>Production Role</h1>
              <p>{portfolioData.attributes.role}</p>
            </TextWrapper>
            <TextWrapper></TextWrapper>
            <TextWrapper></TextWrapper>
          </MetaWrapper>
          <TwoColumn>
            <div className="block-one">
              <h2>Description</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: portfolioData.attributes.description,
              }}
              className="block-two"
            ></div>
          </TwoColumn>
        </DetailsWrapper>
      </BackgroundWrapper>
    </VideoDetailsContainer>
  </motion.div></>
   
  );
}
