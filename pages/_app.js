import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";
import { NavProvider } from "../contexts/navbar.context";
import { motion, AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import Script from "next/script";




function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
 const router = useRouter

  return (
    <>
      <Script strategy="lazyOnLoad" src={`https://www.googletagmanager.com/gtag/js?id=G-L89JE8VWSY`}/>

      <Script strategy="lazyOnLoad">{` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L89JE8VWSY');`}</Script>
      <NavProvider>
      
        <Layout>
        <AnimatePresence>
       
        
          <Component {...pageProps} key={router.asPath}/>
          </AnimatePresence>
          
        </Layout>
        
      
      </NavProvider>
      
    </>
    
  );
}

const EmptyLayout = ({ children }) => <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;

export default MyApp;
