import styled from "styled-components";
import Link from "next/link";


const FooterWrapper= styled.div`
background-color:#43594d;
width:100vw`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;
  background-color: #43594d;
  padding: 30px;
  justify-content: space-between;

  & h1 {
    font-family: Founders;
    font-weight: 200;
    font-size: 100px;
  }

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
  justify-content: space-between;
  flex-wrap: wrap;

  & :nth-child(3){
    :hover{
      color: white;
      cursor: pointer;
    }
    
  }
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
    font-family: Founders;
  }

  @media (max-width: 479px) {
    & h1 {
      font-size: 45px;
    }

    & p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    :hover {
      color: white;
    }
  }

  & h4 {
    font-family: Founders;
    font-size: 22px;
    line-height: 33px;
    margin: 0;
  }

  @media (max-width: 479px) {
    & h4 {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
    <FooterContainer>
      <FooterTopContainer>
        <FooterInnerContainers>
          <h1>Don’t be shy, let’s chat!</h1>
        </FooterInnerContainers>
        <FooterInnerContainers>
          <ContactInfoContainer>

          <a target="_blank" href="https://www.google.com/maps/place/Lengkok+York,+Taman+Dhoby+Ghaut,+10450+George+Town,+Pulau+Pinang/@5.4138573,100.3054329,17z/data=!3m1!4b1!4m5!3m4!1s0x304ac3b4f7ca62f5:0xf2126c9487c7e9d5!8m2!3d5.4138573!4d100.3076216" rel="noopener noreferrer">
          <h4>Islet Studio Venture Co-Working Space</h4>
              <h4>Jalan Tanjung Tokong, Penang, Malaysia.</h4>
            </a>


          </ContactInfoContainer>

          <ContactInfoContainer>
         

            <a target="_blank" href="mailto:hello@isletstudio.com?subject=Hello!%20" rel="noopener noreferrer">
          <h4>info@isletstudio.com</h4>
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
        <FooterInnerContainers 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </FooterInnerContainers>
      </FooterTopContainer>
      <p>All rights reserved © Islet Studio 2022</p>
    </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
