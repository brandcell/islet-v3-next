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
import WhiteLayout from "../components/layouts/white-layout.component";

export async function getStaticProps() {
  const res = await axios.get(`${API_URL}/api/clients/?populate=*`);

  return {
    props: { clientlist: res.data.data },
  };
}

const AboutUS = ({ clientlist }) => {
  return (
    <Page>
      <PageContainer>
        <div className="title-container-wrapper">
          <TitleContainer>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
              }}
              viewport={{ once: true }}
            >
              We delve into brands
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
                
              }}
              viewport={{ once: true }}
            >
              to divulge stories.
            </motion.h1>
          </TitleContainer>
        </div>

        <TwoColumn>
          <div className="block-one">
            <h2>About Us</h2>
          </div>

          <div className="block-two">
            <p>
              {`With our forté in storytelling, filmmaking, and sound design,
            we'll take your brand to uncharted waters and stop at nothing to
            bring your unique story to life.`}
              <br />
              <br />
              {`Just like how the entire crew of a ship is the heart and
            soul of an ocean liner, people are the essence of our filmmaking
            process. We value every single member—from your team, to our
            collaborators, to crew members—in bringing a vision to life.`}
              <br />
              <br />
              {`
            In our expertise with commercials, documentaries, and product
            videos, we surround ourselves with the best creative minds in the
            industry. When great minds come together, new and exciting ideas
            are discovered. This is how we create bold and unforgettable
            works.`}{" "}
              <br />
              <br />
              {`Telling your story is not easy. Not everyone knows what
            you went through as vividly as yourself. With our mastery of the
            nuances of storytelling, we can draw out your beginnings,
            struggles, successes, and aspirations to humanise your brand.`}
              <br />
              <br />{" "}
              {`Let the world be your oyster, and choose our lens to
            capture your audience's heart.`}
            </p>
          </div>
        </TwoColumn>

        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true }}
          className="pull-quote"
          style={{ marginTop: 100, marginBottom: 100 }}
        >
          {`"These young filmmakers believe that the most important message
            imparted through their first food docu-series is how food
            ultimately connects different generations in completely different
            but meaningful ways."- The Star`}
        </motion.h3>

        <div className="pull-quote-wrapper">
          <div style={{ margin: "0" }}>
            <p style={{ margin: "0" }}>The Star Paper</p>
          </div>
          <div style={{ margin: "0" }}>
            <p style={{ margin: "0" }}>Featured</p>
          </div>
          <motion.div 
          
          initial={{ scale: 1 }}
              
              whileHover={{scale:1, transition:{
                type:'tween'
              }}}

          >
            <Link href="https://www.thestar.com.my/food/food-news/2021/09/16/new-documentary-series-highlights-penang039s-famed-food-culture-and-food-vendors?fbclid=IwAR0HhnAM5QG4qNbKh3HHdBOWdDMd_B_Y_ch1DJF9Gt-OLv-MCPIn-GbDCoQ">
              <ArrowIcon style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </Link>
          </motion.div>
        </div>

        <hr style={{ background: "black", height: "1px", border: "none" }}></hr>

        <FounderSection />

        <hr></hr>
        <div className="client-section">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
              }}

            viewport={{ once: true }}
            style={{ margin: "100px 0px 100px 0px" }}
          >
            {`Brands We've Worked With`}
          </motion.h1>
          <ClientContainer clientlist={clientlist} />
        </div>
      </PageContainer>
    </Page>
  );
};

export default AboutUS;

AboutUS.Layout = WhiteLayout;
