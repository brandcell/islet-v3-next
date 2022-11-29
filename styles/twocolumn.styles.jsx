import styled from "styled-components";

const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 200px;

  @media (max-width:991px) {
    margin-bottom: 150px;
    
  }

  
  & .block-one{
  
    min-width: 375px;


    @media (max-width:991px) {
      margin-bottom:40px;

      & h2{
        font-size: 28px;
        line-height: 33px;
      }
    }

    @media (max-width:375px) {
      
    width:auto;
    }
  }

  & .block-two{
    width: auto;
    max-width: 747px;

    @media (max-width:991px) {
      max-width: 545px;
      
    }
  }

  & h2 {
    font-family: Founders;
    font-weight: 100;
    font-size: 45px;
    margin-top: 0;
  }

  & p {
    font-family: Founders;
    font-weight: 100;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.66px;
    margin-top: 0;
  }

  & h3 {
    font-family: Founders;
    font-weight: 100;
    margin-top: 0;

  }


  @media (max-width:991px) {
    flex-direction: column;
    width: 100%;

    & h2 {
    font-family: Founders;
    font-weight: 100;
    line-height: 45px;
    font-size: 45px;
    margin-top: 0;
  }

  & p {
    font-family: Founders;
    font-weight: 100;
    font-size: 22px;
    line-height: 33px;
    margin-top: 0;
  }

  & h3 {
    font-family: Founders;
    font-size: 45px;
    font-weight: 100;
    line-height: 45px;
    margin-top: 0;
  }

  }

`;
export default TwoColumn;
