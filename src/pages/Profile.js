import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import ProfileComponent from "../components/profile/Profile";

const Profile = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Profile" currentPage="Profile" />
      <ProfileComponent />
      {/* <FooterTwo /> */}
    </>
  );
};

export default Profile;
