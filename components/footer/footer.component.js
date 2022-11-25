import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #43594d;
  padding: 50px 58px 28px 60px;
  justify-content: space-between;

  & h1{
    font-family: Founders;
    font-weight: 200;
    font-size: 100px;
  }

  & p{
    font-family: Signifier;
    font-size: 22px;
    line-height: 33px;
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

  & h1{
    max-width: 400px;
    font-size: 68px;
    margin: 0;

  }



 
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h4{ 
    font-family: Founders;
    font-size: 22px;
    line-height: 33px;
    margin: 0;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <FooterInnerContainers><h1>Don’t be shy, let’s chat!</h1></FooterInnerContainers>
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
        <FooterInnerContainers>Back to Top</FooterInnerContainers>
      </FooterTopContainer>
      <p>All rights reserved © Islet Studio 2022</p>
    </FooterContainer>
  );
}

export default Footer;
