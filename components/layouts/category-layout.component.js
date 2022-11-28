import styled from "styled-components";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Navbar/navBar";
import { useRouter } from "next/router";

const StyledLinkContainer = styled.div`
  max-width: 657px;
  min-height: 38px;
  margin: auto;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & p {
    font-family: Signifier;
    font-size: 20px;
    color: white;
  }
`;

function CategoryLayout({ children }) {

  const router = useRouter();

  console.log(router.pathname)

  return (
    <>
      <Navbar color="white" />

      <div className="portfolio-page-wrapper">
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

        <AnimatePresence>{children}</AnimatePresence>
      </div>
    </>
  );
}

export default CategoryLayout;
