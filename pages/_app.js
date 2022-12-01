import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";
import { NavProvider } from "../contexts/navbar.context";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;


  return (
    <>
    <AnimatePresence>
      <NavProvider>
        
        <Layout>
        
          <Component {...pageProps} />
        </Layout>
      </NavProvider>
      </AnimatePresence>
    </>
    
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
