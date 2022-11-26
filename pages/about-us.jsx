import TwoColumn from "../styles/twocolumn.styles";
import TitleContainer from "../styles/title.styles";
import { Page } from "../styles/page.styles";
import { PageContainer } from "../styles/page.styles";

import FounderSection from "../components/founder-component/founder.component";

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

const AboutUS = ({clientlist}) => {
  const { isFooter, setIsFooter } = useContext(NavContext);

  useEffect(() => {
    setIsFooter(true);
  }, [isFooter]);

  return (

    <Page>
    <PageContainer>
      
      <TitleContainer>
        <h1>
        We delve into brands to divulge stories. 
        </h1>
      </TitleContainer>

      <TwoColumn>
        <h2>About Us</h2>

        <p>
          
With our forté in storytelling, filmmaking, and sound design, we’ll take your brand to uncharted waters and stop at nothing to bring your unique story to life. 
‍
Just like how the entire crew of a ship is the heart and soul of an ocean liner, people are the essence of our filmmaking process. We value every single member—from your team, to our collaborators, to crew members—in bringing a vision to life.

In our expertise with commercials, documentaries, and product videos, we surround ourselves with the best creative minds in the industry. When great minds come together, new and exciting ideas are discovered. This is how we create bold and unforgettable works. 
‍
Telling your story is not easy. Not everyone knows what you went through as vividly as yourself. With our mastery of the nuances of storytelling, we can draw out your beginnings, struggles, successes, and aspirations to humanise your brand. 
‍
 Let the world be your oyster, and choose our lens to capture your audience’s heart.
        </p>
      </TwoColumn>

      <TwoColumn>
        <h2></h2>
        <h3 className="pull-quote">
          “ISLET was featured the coveted D&AS Yellow Pencil for Direction in
          2015.”
        </h3>
      </TwoColumn>

      <FounderSection />

      <hr></hr>
    <TitleContainer><h1>Clients</h1></TitleContainer>
      <ClientContainer clientlist={clientlist} />
      </PageContainer>
      </Page>
  );
};

export default AboutUS;
