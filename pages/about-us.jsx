import TwoColumn from "../styles/twocolumn.styles";
import TitleContainer from "../styles/title.styles";
import { Page } from "../styles/page.styles";
import { PageContainer } from "../styles/page.styles";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import FounderSection from "../components/founder-component/founder.component";

import ArrowIcon from "../public/arrow-icon.svg";

import ClientContainer from "../components/client-component/client-container";

import { API_URL } from "../utils/urls";

import { useContext, useEffect } from "react";
import { NavContext } from "../contexts/navbar.context";
import axios from "axios";

export async function getStaticProps() {
  const res = await axios.get(`${API_URL}/api/clients/?populate=*`);

  return {
    props: { clientlist: res.data.data },
  };
}

const AboutUS = ({ clientlist }) => {
  const { isFooter, setIsFooter } = useContext(NavContext);

  useEffect(() => {
    setIsFooter(true);
  }, [isFooter]);

  return (
    <Page>
      <PageContainer>
        <div style={{ margin: "240px auto" }}>
          <TitleContainer>
            <h1>We delve into brands to divulge stories.</h1>
          </TitleContainer>
        </div>

        <TwoColumn style={{ marginBottom: "200px" }}>
          <div className="block-one">
            <h2>About Us</h2>
          </div>

          <div className="block-two">
            <p>
              `With our forté in storytelling, filmmaking, and sound design,
              we'll take your brand to uncharted waters and stop at nothing to
              bring your unique story to life.
              <br/>
              <br/> Just like how the entire crew of a ship is the heart and
              soul of an ocean liner, people are the essence of our filmmaking
              process. We value every single member—from your team, to our
              collaborators, to crew members—in bringing a vision to life.
              <br/>
              <br/>
              In our expertise with commercials, documentaries, and product
              videos, we surround ourselves with the best creative minds in the
              industry. When great minds come together, new and exciting ideas
              are discovered. This is how we create bold and unforgettable
              works. <br/>
              <br/> Telling your story is not easy. Not everyone knows what
              you went through as vividly as yourself. With our mastery of the
              nuances of storytelling, we can draw out your beginnings,
              struggles, successes, and aspirations to humanise your brand. 
              <br/>
              <br/> Let the world be your oyster, and choose our lens to
              capture your audience's heart.`
            </p>
            <h3
              className="pull-quote"
              style={{ marginTop: 100, marginBottom: 100 }}
            >
              `"These young filmmakers believe that the most important message
              imparted through their first food docu-series is how food
              ultimately connects different generations in completely different
              but meaningful ways."`- The Star
            </h3>
            <div className="pull-quote-wrapper">
              <div style={{ margin: "0" }}>
                <p style={{ margin: "0" }}>The Star Paper</p>
              </div>
              <div style={{ margin: "0" }}>
                <p style={{ margin: "0" }}>Featured</p>
              </div>
              <div className="arrow-container">
                <Link href="https://www.thestar.com.my/food/food-news/2021/09/16/new-documentary-series-highlights-penang039s-famed-food-culture-and-food-vendors?fbclid=IwAR0HhnAM5QG4qNbKh3HHdBOWdDMd_B_Y_ch1DJF9Gt-OLv-MCPIn-GbDCoQ">
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <hr
              style={{ background: "black", height: "2px", border: "none" }}
            ></hr>
          </div>
        </TwoColumn>

        <FounderSection />

        <hr></hr>
        <h1
          style={{
            fontFamily: "Founders",
            fontSize: "60px",
            fontWeight: "300",
          }}
        >
          Our Clients
        </h1>
        <ClientContainer clientlist={clientlist} />
      </PageContainer>
    </Page>
  );
};

export default AboutUS;
