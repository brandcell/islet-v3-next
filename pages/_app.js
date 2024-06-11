import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";
import { NavProvider } from "../contexts/navbar.context";
import { motion, AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import Script from "next/script";
// import TagManager, { TagManagerArgs } from "react-gtm-module";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { CategoryProvider } from "../contexts/category.context";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  const router = useRouter;

  //google tag manager code

  // const TagManagerArgs = { gtmId };

  // useEffect(() => {
  //   TagManager.initialize(TagManagerArgs);
  // }, []);

  return (
    <>
      <GoogleTagManager gtmId="GTM-NR2PKG68" />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NR2PKG68"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <NavProvider>
        <CategoryProvider>
          <Layout>
            <Analytics />
            <AnimatePresence>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Layout>
        </CategoryProvider>
      </NavProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => (
  <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
);

export default MyApp;
