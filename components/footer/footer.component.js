import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #43594d;
  padding: 50px 58px 28px 60px;
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
    <FooterContainer>
      <FooterTopContainer>
        <FooterInnerContainers>
          <h1>Don’t be shy, let’s chat!</h1>
        </FooterInnerContainers>
        <FooterInnerContainers>
          <ContactInfoContainer>
            <h4>Islet Studio Venture Co-Working Space</h4>
            <h4>Jalan Tanjung Tokong, Penang, Malaysia.</h4>
          </ContactInfoContainer>

          <ContactInfoContainer>
            <h4>+60 124278228</h4>
            <h4>info@isletstudio.com</h4>
          </ContactInfoContainer>
          <ContactInfoContainer>
            <h4>Instagram</h4>
            <h4>Facebook</h4>
          </ContactInfoContainer>
        </FooterInnerContainers>
        <FooterInnerContainers onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Back to Top</FooterInnerContainers>
      </FooterTopContainer>
      <p>All rights reserved © Islet Studio 2022</p>
    </FooterContainer>
  );
}

export default Footer;
