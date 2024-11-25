import React from "react";
import Navigation from "../Components/Navigation";
import Banner from "../Components/Banner";
import ContactForm from "../Components/ContactForm";
import FootBanner from "../Components/FootBanner";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navigation />
      <Banner banner={"contactbanner.png"} />
      <ContactForm />
      <FootBanner />
      <Footer />
    </>
  );
};

export default ContactUs;
