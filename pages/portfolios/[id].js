import axios from "axios";
import Head from "next/head";
import { API_URL } from "../../utils/urls";
import styled from "styled-components";
import TwoColumn from "../../styles/twocolumn.styles";
import { useRouter } from "next/router";

import ReactMarkdown from "react-markdown";

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
  padding-top: 100px;
  aspect-ratio: 16/9;
`;

const VideoDetailsContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  overflow: hidden;

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
  margin: auto;
  min-width: 280px;
  width: 80%;
  max-width: 1140px;

  & h1{
    font-size: 68px;
    line-height: 65px;
  }

  @media (max-width: 768px) {

  padding: 30px;
  width: auto;
  
  & h1{
    font-size: 45px;
    line-height: 45px;
  }
  }
`;

export const TextWrapper = styled.div`
  min-width: 314px;
  margin-right: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px){
    min-width: 0;
    
  }

  & h1 {
    font-family: Signifier;
    font-size: 22px;
    font-weight: 100px;
    line-height: 33px;
    width: 100%;
    margin-bottom: 0;


    @media (max-width:768px) {
      font-size: 16px;
      line-height: 20px;
      min-width:200px;
      
    }
  }



  & p {
    font-family: Founders;
    font-size: 22px;
    line-height: 33px;
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
  flex-wrap:wrap;
  justify-content: space-between;
  margin-bottom: 131px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100%;
    
  }
`;

export default function Portfolio({ portfolioData }) {

  const router = useRouter()

  return (
    <div className="portfolio-page">
      <div className="back-button-container" onClick={() => router.back()}>
      <div className="back-button-wrapper">
        <span className="first-line"></span>
        <span className="second-line"></span>
      </div>
      
       
      </div>
      <Head>
        <title>{portfolioData.attributes.title}</title>
      </Head>

      <br />
      <VideoContainer>
        <VideoPlayer
          autoPlay
          muted
          controls
          width="100%"
          height='100%'
          src={portfolioData.attributes.fullvideo.data.attributes.url}
        ></VideoPlayer>
      </VideoContainer>
      <VideoDetailsContainer>
        <DetailsWrapper>
          <h1>{portfolioData.attributes.title}</h1>
          <MetaWrapper>
            <TextWrapper>
              <h1>Client</h1>
              <p>{portfolioData.attributes.title}</p>
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
          <div className="block-one"><h2>Description</h2></div>
            <div dangerouslySetInnerHTML={{ __html: portfolioData.attributes.description}} className="block-two"> 
             </div>
           
          </TwoColumn>
        </DetailsWrapper>
      </VideoDetailsContainer>
    </div>
  );
}
