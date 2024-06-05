import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactInfo from '../components/contact/ContactInfo';
import FooterTwo from '../common/footer/FooterTwo';




const Contact = () => {
  return (
    <>

      <HeaderOne />
      <Breadcrumb heading="Contact Us" currentPage="Contact" />
      <ContactInfo />
      <FooterTwo />

  
    </>
  );
}

export default Contact;