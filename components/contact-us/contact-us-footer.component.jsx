import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  padding: 30px;
  justify-content: space-between;

  & p {
    font-family: Signifier;
    font-size: 22px;
    line-height: 33px;

    @media (max-width: 479px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const FooterTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 273px;
`;

const FooterInnerContainers = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 30px;

  & h1 {
    max-width: 400px;
    font-size: 68px;
    margin: 0;
    color: black;
    font-family: Founders;
    font-weight: 300;
    line-height: 68px;
  }

  @media (max-width: 479px) {
    & h1 {
      font-size: 45px;
    }

    & p {
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
    }
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h4 {
    font-family: Founders;
    font-size: 22px;
    line-height: 33px;
    margin: 0;
    color: black;
    font-weight: 300;
  }

  @media (max-width: 479px) {
    & h4 {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

function ContactUsFooter() {
  return (
    <FooterContainer color="white">
      <FooterTopContainer>
        <FooterInnerContainers>
          <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            Don’t be shy, 
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
            let’s chat!
          </motion.h1>
          </div>
        </FooterInnerContainers>
        <FooterInnerContainers>
          <ContactInfoContainer>
            <h4>Islet Studio</h4>
            <h4>36 Lengkok York, Taman Dhoby Ghaut, 10450 Georgetown Pulau Pinang</h4>
          </ContactInfoContainer>

          <ContactInfoContainer>
            <h4>+60 124278228</h4>
            
            <a className="email-click" target="_blank" href="mailto:hello@isletstudio.com?subject=Hello!%20" rel="noopener noreferrer">
          <h4>hello@isletstudio.com</h4>
            </a>
          </ContactInfoContainer>
          <ContactInfoContainer>
          <a target="_blank" href='https://www.instagram.com/robertvisuals.mov/?hl=en' rel="noopener noreferrer">
          <h4>Instagram</h4>
            </a>
            <a target="_blank" href='https://www.facebook.com/RobVisuals/' rel="noopener noreferrer">
            <h4>Facebook</h4>
            </a>
          </ContactInfoContainer>
        </FooterInnerContainers>
      </FooterTopContainer>
    </FooterContainer>
  );
}

export default ContactUsFooter;
