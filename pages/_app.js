import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";
import { NavProvider } from "../contexts/navbar.context";
import { motion, AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
 const router = useRouter

  return (
    <>
   
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
