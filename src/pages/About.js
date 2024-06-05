import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import AboutUs from "../components/about/AboutUs";

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="About Us" currentPage="About" />
      <AboutUs/>

      <FooterTwo />
    </>
  );
};

export default About;
