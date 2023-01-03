import ContactUsFooter from "../components/contact-us/contact-us-footer.component";

import Script from "next/script";
import Navbar from "../components/Navbar/navBar";
import { motion } from "framer-motion";
import styled from "styled-components";

const FormField = styled.div`
display: flex;
flex-direction: column;
`

const LeftSection = styled.div`
display:flex;
flex-direction:column;`

const RightSection = styled.div`
display: flex;
flex-direction: column;
`

function ContactUs() {
  return (
    <div
    >
      <Script src="https://apps.elfsight.com/p/platform.js" />

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
      <div className="contact-us-page-wrapper">
        <ContactUsFooter />
      </div>

      {/* contact form section */}
      
<hr></hr>



      <div className="form-section">
     
       <h1 style={{margin:"60px 0px"}}>Thank you for your submission, we will reach out to you via email in a bit!</h1> 
       
        <div 
      class="elfsight-app-c28983a3-c4dd-4178-905a-d31fc2bd754c"></div>
     
      </div>
    
    </div>
  );
}

export default ContactUs;
