import ContactUsFooter from "../components/contact-us/contact-us-footer.component";

import Script from "next/script";
import Navbar from "../components/Navbar/navBar";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <motion.div
    style={{overflowX:'hidden'}}
    animate={{x:[-1000,0]}}
    exit={{x:[1000,0]}}
>
      <Script src="https://apps.elfsight.com/p/platform.js" />
      <Navbar color="black" />
      <div className="contact-us-page-wrapper">
        <ContactUsFooter />
      </div>

        <div class="elfsight-app-c28983a3-c4dd-4178-905a-d31fc2bd754c"></div>
    
    </motion.div>
  );
}

export default ContactUs;
