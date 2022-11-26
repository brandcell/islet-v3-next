import styled from "styled-components";

const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  

  & h2 {
    width: 35%;
    font-family: Founders;
    font-weight: 100;
    font-size: 60px;
    margin-top: 0;
  }

  & p {
    width: 65%;
    font-family: Founders;
    font-weight: 100;
    font-size: 22px;
    margin-top: 0;
  }

  & h3 {
    width: 65%;
    font-family: Founders;
    font-weight: 100;
    margin-top: 0;
  }


  @media (max-width:768px) {
    flex-direction: column;

    & h2 {
    width: 35%;
    font-family: Founders;
    font-weight: 100;
    line-height: 45px;
    font-size: 45px;
    margin-top: 0;
  }

  & p {
    width: 65%;
    font-family: Founders;
    font-weight: 100;
    font-size: 22px;
    line-height: 33px;
    margin-top: 0;
  }

  & h3 {
    width: 65%;
    font-family: Founders;
    font-size: 60px;
    font-weight: 100;
    margin-top: 0;
  }

  }

`;
export default TwoColumn;
