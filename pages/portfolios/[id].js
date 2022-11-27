import axios from "axios";
import Head from "next/head";
import { API_URL } from "../../utils/urls";
import styled from "styled-components";
import TwoColumn from "../../styles/twocolumn.styles";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await axios.get(`${API_URL}/api/portfolios?populate=%2A`);

  const portfolios = await res.data.data;

  console.log(portfolios);

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
  height: 90vh;
  padding-top: 100px;
`;

const VideoDetailsContainer = styled.div`
  padding-top: 100px;
  min-height: 90vh;
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
`;

export const TextWrapper = styled.div`
  min-width: 314px;
  margin-right: 10px;
  margin-bottom: 30px;

  & h1 {
    font-family: Signifier;
    font-size: 22px;
    font-weight: 100px;
    line-height: 33px;
    width: 100%;
    margin-bottom: 0;
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
          height={400}
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
              <p>{portfolioData.attributes.title}</p>
            </TextWrapper>
            <TextWrapper></TextWrapper>
            <TextWrapper></TextWrapper>
          </MetaWrapper>
          <TwoColumn>
          <div className="block-one"><h2>Description</h2></div>
            <div className="block-two"> <p>{portfolioData.attributes.description}</p></div>
           
          </TwoColumn>
        </DetailsWrapper>
      </VideoDetailsContainer>
    </div>
  );
}
