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
