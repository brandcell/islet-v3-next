import styled from "styled-components";

const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  
  & .block-one{
  
    min-width: 375px;

    @media (max-width:375px) {
      
    width:auto;
    }
  }

  & .block-two{
    width: auto;
    max-width: 747px;
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
    font-size: 60px;
    font-weight: 100;
    margin-top: 0;
  }

  }

`;
export default TwoColumn;
