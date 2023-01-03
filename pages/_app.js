import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";
import { NavProvider } from "../contexts/navbar.context";
import { motion, AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import Script from "next/script";
import TagManager, {TagManagerArgs} from "react-gtm-module";
import { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  const router = useRouter;

  //google tag manager code
  const gtmId = 'GTM-KMG87VF'

  const TagManagerArgs = {gtmId}

  useEffect(() => {
    TagManager.initialize(TagManagerArgs)
   
  }, []);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-L89JE8VWSY`}
      />

      <Script
        id="datalayer-script"
        strategy="afterInteractive"
      >{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L89JE8VWSY');`}</Script>
      <NavProvider>
        <Layout>
          <AnimatePresence>
            <Component {...pageProps} key={router.asPath} />
            <Analytics />
          </AnimatePresence>
        </Layout>
      </NavProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => (
  <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
);

export default MyApp;
