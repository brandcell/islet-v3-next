import styled from "styled-components";

const TitleContainer = styled.div`

  margin:0;

  & h1 {
    max-width: 900px;
    line-height: 100px;
    font-size: 100px;
    font-family: Founders;
    font-weight: 200;
    margin: 0;
  }

  @media (max-width: 991px) {
    & h1 {
     max-width: 613px;
      line-height: 80.2px;
      font-size: 68px;
    }
  }

  @media (max-width: 375px) {
    & h1 {
        max-width: 315px;
      line-height: 45px;
      font-size: 45px;
    }
  }
`;
export default TitleContainer;
