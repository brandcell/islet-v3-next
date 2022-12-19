import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";
import { NavProvider } from "../contexts/navbar.context";
import { motion, AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
 const router = useRouter

  return (
    <>

      <NavProvider>
      
        <Layout>
        <AnimatePresence>
          <Head>
          <title>Islet Studio - Video Production House </title>
          <meta type="description" content="Islet Studio, a video production company based in Penang, Malaysia.  Specialising in commercials, videography, corporate videos, product videos and cinematography, Islet Studio aims to deliver good storytelling through videos "></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          </Head>
        
          <Component {...pageProps} key={router.asPath}/>
          </AnimatePresence>
          
        </Layout>
        
      
      </NavProvider>
      
    </>
    
  );
}

const EmptyLayout = ({ children }) => <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;

export default MyApp;
