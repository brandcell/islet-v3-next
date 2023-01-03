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
    <motion.div
      style={{ overflowX: "hidden" }}
      animate={{ x: [-1000, 0] }}
      exit={{ x: [1000, 0] }}
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
     
        
        <form action="https://formsubmit.co/briansh1225@gmail.com" method="POST">
        
          <LeftSection>
            <FormField>
              <label for="name">Name</label>
              <input type="text" id ="name" name="name" required />
            </FormField>
            <FormField>
              <label for="phone">Phone Number</label>
              <input type="tel" id='whatsapp' name="whatsapp" required />
            </FormField>
            <FormField>
              <label for="email">Email</label>
              <input type="text" id='email' name="email" required />
            </FormField>
            <FormField>
              <label for="budget">Budget</label>
              <select name="budget" id="budget">

           
    <option value="RM 15,000 - RM 20,000">RM 15,000 - RM 20,000</option>
    <option value="RM 20,000 - RM 30,000">RM 20,000 - RM 30,000</option>
    <option value="RM 30,000+">RM 30,000+</option>

    </select>

      
            </FormField>
            <FormField>
              <label for="deadline">Deadline</label>
              <input type="date" id='deadline' name="deadline" />
            </FormField>
          </LeftSection>

          <RightSection>
            <FormField>
              <label for="subject">Subject</label>
              <input type="text" id='subject' name="subject" required />
            </FormField>
            <FormField>
              <label for="video-needs">What are your video needs?</label>
              <textarea type="text" id='vid-needs' name="vid-needs" required />
            </FormField>
            <input type="hidden" name="_subject" value="New submission from Islet Studio Web!"></input>

            <input type="hidden" name="_next" value="http://isletstudio.com/thank-you"/>

            <input type="hidden" name="_captcha" value="false">


            
            <button type="submit">SUBMIT</button>
          </RightSection>
        </form>
        <div 
      class="elfsight-app-c28983a3-c4dd-4178-905a-d31fc2bd754c"></div>
     
      </div>
    
    </motion.div>
  );
}

export default ContactUs;
