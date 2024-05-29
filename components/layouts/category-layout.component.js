import styled from "styled-components";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Navbar/navBar";
import { useRouter } from "next/router";

import { useCategoryContext } from "../../contexts/category.context";

const StyledFixedLinkbar = styled.div`
  background-color: black;
  z-index: 50;
  top: 0px;
`;
const StyledLinkContainer = styled.div`
  max-width: 800px;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 50px;
  margin: auto;
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

  const { routeState, setRouteState } = useCategoryContext();

  return (
    <motion.div className="portfolio-page-wrapper">
      <Navbar color="white" portfolio={true} />
      <StyledFixedLinkbar>
        <StyledLinkContainer>
          <div>
            <Link
              // onClick={() => setRouteState(router.asPath)}
              className={router.asPath === "/portfolios" ? "active" : ""}
              href="/portfolios"
            >
              <p>All</p>
            </Link>
          </div>

          <div>
            <Link
              // onClick={() => setRouteState(router.asPath)}
              className={
                router.asPath === "/portfolios/category/product" ? "active" : ""
              }
              href="/portfolios/category/product"
            >
              <p>Product</p>
            </Link>
          </div>

          <div>
            <Link
              // onClick={() => setRouteState(router.asPath)}
              className={
                router.asPath === "/portfolios/category/commercials"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/commercials"
            >
              <p>Commercial</p>
            </Link>
          </div>
          <div>
            <Link
              // onClick={() => setRouteState(router.asPath)}
              className={
                router.asPath === "/portfolios/category/documentaries"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/documentaries"
            >
              <p>Documentaries</p>
            </Link>
          </div>

          <div>
            <Link
              // onClick={() => setRouteState(router.asPath)}
              className={
                router.asPath == "/portfolios/category/corporate"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/corporate"
            >
              <p>Corporate</p>
            </Link>
          </div>

          <div>
            <Link
              // onClick={() => setRouteState(router.asPath)}
              className={
                router.asPath == "/portfolios/category/social-media"
                  ? "active"
                  : ""
              }
              href="/portfolios/category/social-media"
            >
              <p>Social Media</p>
            </Link>
          </div>
        </StyledLinkContainer>
      </StyledFixedLinkbar>

      {children}
    </motion.div>
  );
}

export default CategoryLayout;
