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
      <AnimatePresence exitBeforeEnter>
        <Layout>

        
        
          <Component {...pageProps} key={router.asPath}/>
         
          
        </Layout>
        </AnimatePresence>
      
      </NavProvider>
      
    </>
    
  );
}

const EmptyLayout = ({ children }) => <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;

export default MyApp;
