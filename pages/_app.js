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
        
          <Component {...pageProps} key={router.route}/>
         
        </Layout>
        
      </NavProvider>
      
    </>
    
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
