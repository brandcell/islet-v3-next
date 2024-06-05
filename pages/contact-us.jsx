import ContactUsFooter from "../components/contact-us/contact-us-footer.component";

import Script from "next/script";
import Navbar from "../components/Navbar/navBar";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

//emailjs

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Router, useRouter } from "next/router";

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const router = useRouter();

  const form = useRef();

  const sendEmail = (e) => {
    setIsLoading(true);

    e.preventDefault();

    emailjs
      .sendForm("service_oocbtol", "template_jv6hmru", form.current, {
        publicKey: "VyGT6wUPwQwtDV8P7",
      })
      .then((res) => {
        console.log(res);

        router.push("/thank-you");

        setIsLoading(false);

        console.log("success!");
      })
      .catch((error) => {
        console.log("Failed", error.text);
      });
  };

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
        <form ref={form} onSubmit={sendEmail} method="POST">
          <LeftSection>
            <FormField>
              <label for="name">Name</label>
              <input type="text" id="user_name" name="user_name" required />
            </FormField>
            <FormField>
              <label for="whatsapp">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                required
              />
            </FormField>
            <FormField>
              <label for="email">Email</label>
              <input type="text" id="email" name="user_email" required />
            </FormField>
            <FormField>
              <label for="budget">Budget</label>
              <select name="user_budget" id="user_budget">
                <option value="" selected disabled hidden>
                  Select budget here
                </option>
                <option value="RM 15,000 - RM 20,000">
                  RM 15,000 - RM 20,000
                </option>
                <option value="RM 20,000 - RM 30,000">
                  RM 20,000 - RM 30,000
                </option>
                <option value="RM 30,000+">RM 30,000+</option>
              </select>
            </FormField>
            <FormField>
              <label for="user_deadline">Deadline</label>
              <input type="date" id="user_deadline" name="user_deadline" />
            </FormField>
          </LeftSection>

          <RightSection>
            <FormField>
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </FormField>
            <FormField>
              <label for="video-needs">What are your video needs?</label>
              <textarea type="text" id="message" name="message" required />
            </FormField>
            <input
              type="hidden"
              name="_subject"
              value="New submission from Islet Studio Web!"
            ></input>

            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_next"
              value="http://isletstudio.com/thank-you"
            />

            <button className="form-submit-button" type="submit">
              {isLoading ? `SENDING..` : `SUBMIT`}
            </button>
          </RightSection>
        </form>
        <div class="elfsight-app-c28983a3-c4dd-4178-905a-d31fc2bd754c"></div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
