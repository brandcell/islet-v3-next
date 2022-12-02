import styled from "styled-components";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Navbar/navBar";
import { useRouter } from "next/router";

const StyledFixedLinkbar = styled.div`
  width: 100vw;
  background-color: black;
  position: fixed;
  z-index: 50;
  top:0px;
`;
const StyledLinkContainer = styled.div`
  max-width: 657px;
  min-height: 50px;
  margin: 100px auto auto auto;
  top: 100px;
  display: flex;
  z-index: 100;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 30px;

  & p {
    font-family: Signifier;
    font-size: 20px;
    color: white;
  }

  @media (max-width: 768px) {
    max-width: 350px;

    & p {
      font-size: 16px;
    }
  }
`;

function CategoryLayout({ children }) {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <>
      <div className="portfolio-page-wrapper">
        <Navbar color="white" portfolio={true} />
        <StyledFixedLinkbar>
          <StyledLinkContainer>
            <Link
              className={router.asPath === "/portfolios" ? "active" : ""}
              href="/portfolios"
            >
              <p>All</p>
            </Link>
            <Link
              className={
                router.asPath === "/portfolios/category/product" ? "active" : ""
              }
              href="/portfolios/category/product"
            >
              <p>Product</p>
            </Link>
            <Link
              className={
                router.asPath === "/portfolios/category/commercials"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/commercials"
            >
              <p>Commercial</p>
            </Link>
            <Link
              className={
                router.asPath === "/portfolios/category/documentaries"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/documentaries"
            >
              <p>Documentaries</p>
            </Link>
            <Link
              className={
                router.asPath == "/portfolios/category/corporate"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/corporate"
            >
              <p>Corporate</p>
            </Link>
          </StyledLinkContainer>
        </StyledFixedLinkbar>

        {children}
      </div>
    </>
  );
}

export default CategoryLayout;
