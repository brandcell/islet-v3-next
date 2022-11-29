import ContactUsFooter from "../components/contact-us/contact-us-footer.component";

import Script from "next/script";
import Navbar from "../components/Navbar/navBar";

function ContactUs() {
  return (
    <>
      <Script src="https://apps.elfsight.com/p/platform.js" />
      <Navbar color="black" />
      <div className="contact-us-page-wrapper">
        <ContactUsFooter />
      </div>

        <div class="elfsight-app-c28983a3-c4dd-4178-905a-d31fc2bd754c"></div>
    
    </>
  );
}

export default ContactUs;
