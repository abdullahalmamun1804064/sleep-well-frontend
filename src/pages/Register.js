import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import RegisterComponent from "../components/user/Register";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

const Register = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Register" currentPage="Register" />
      <RegisterComponent  />
    </>
  );
};

export default Register;
