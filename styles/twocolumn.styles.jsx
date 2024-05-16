import styled from "styled-components";

const TwoColumn = styled.div`
  //base top level

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 200px;

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

  //responsive top level

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 150px;
  }

  @media (max-width: 479px) {
    margin-bottom: 100px;
  }

  //top level block one
  & .block-one {
    min-width: 375px;

    @media (max-width: 991px) {
      margin-bottom: 40px;

      & h2 {
        font-size: 45px;
        line-height: 45px;
      }
    }

    @media (max-width: 375px) {
      margin-bottom: 0px;

      width: auto;

      & h2 {
        font-size: 28px;
        line-height: 33px;
      }
    }
  }

  //top-level-block 2
  & .block-two {
    width: auto;
    max-width: 747px;

    @media (max-width: 991px) {
      max-width: 545px;
    }
  }

  //for embedded blog page
  & .raw-html-embed {
    display: flex;
    flex-direction: row;

    @media (max-width: 991px) {
      flex-direction: column;
    }

    & .block-one {
      min-width: 375px;

      @media (max-width: 991px) {
        margin-bottom: 40px;

        & h2 {
          font-size: 45px;
          line-height: 45px;
        }
      }

      @media (max-width: 375px) {
        margin-bottom: 0px;

        width: auto;

        & h2 {
          font-size: 28px;
          line-height: 33px;
        }
      }
    }

    & .block-two {
      width: auto;
      max-width: 747px;

      @media (max-width: 991px) {
        max-width: 545px;
      }
    }
  }
`;
export default TwoColumn;
