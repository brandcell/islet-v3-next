import Navbar from "../Navbar/navBar";
import Footer from "../footer/footer.component";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function WhiteLayout({ children }) {
  const router = useRouter()
  return (
    <AnimatePresence > <motion.div
    key={router.asPath}
    style={{overflowX:'hidden'}}
    animate={{x:[-1000,0] }}
    >

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
