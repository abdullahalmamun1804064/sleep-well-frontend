import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";

import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import HomeComponent from "../components/home/HomeComponent";


const HomeDefault = () => {
  return (
    <>
      
      <HeaderOne /> 
      <Breadcrumb heading="Home" currentPage="home" />

      <HomeComponent/>

      <FooterTwo />
    </>
  );
}

export default HomeDefault;