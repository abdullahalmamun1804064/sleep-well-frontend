import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import LoginComponent from "../components/user/Login";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";


const Login = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Login" currentPage="Login" />
      <LoginComponent />
    </>
  );
};

export default Login;
