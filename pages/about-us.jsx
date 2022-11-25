import TwoColumn from "../styles/twocolumn.styles";
import TitleContainer from "../styles/title.styles";

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
    <div className="about-us-container">
      <TitleContainer>
        <h1>
          What we do is communicating stories in an emotionally engaging way.
        </h1>
      </TitleContainer>

      <TwoColumn>
        <h2>About Us</h2>

        <p>
          We believe simple is magic, and business software should be elegant
          and intuitive—your tools for work should work for you. We believe joy
          is the engine that powers all the best ideas. So we’re designing a way
          of working that makes space for it, removing the distractions,
          interruptions, and frustrations that get in the way. We believe it’s
          important to connect all the dots. We design Dropbox to seamlessly
          integrate with the tools you already use, so everything—and
          everyone—plays well together. We believe you should work the way you
          want. One person’s perfect workflow is another’s formula for burnout.
          We’re building a collaborative platform—you can dance on it however
          you like. We believe joy is the engine that powers all the best ideas.
          So we’re designing a way of working that makes space for it, removing
          the distractions, interruptions, and frustrations that get in the way.
          We believe it’s important to connect all the dots. We design Dropbox
          to seamlessly integrate with the tools you already use, so
          everything—and everyone—plays well together. We believe you should
          work the way you want. One person’s perfect workflow is another’s
          formula for burnout. We’re building a collaborative platform—you can
          dance on it however you like.
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
    </div>
  );
};

export default AboutUS;
