import Navbar from "../Navbar/navBar";
import Footer from "../footer/footer.component";
import { AnimatePresence, motion } from "framer-motion";

function WhiteLayout({ children }) {
  return (
    <AnimatePresence exitBeforeEnter> <motion.div
    style={{overflowX:'hidden'}}
    animate={{x:[-1000,0] }}
    exit={{x:[1000,0]}}>

      <div
        style={{
          background: "white",
          position: "fixed",
          top: "0px",
          height: "100px",
          width: "100vw",
          zIndex: "80",
        }}
      ></div>
      <Navbar color="black" />

      {children}

      <Footer />
    </motion.div></AnimatePresence>
   
  );
}

export default WhiteLayout;
