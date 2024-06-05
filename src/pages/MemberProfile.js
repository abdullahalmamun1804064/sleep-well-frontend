import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import ProfileOne from "../components/profile/ProfileOne";

const MemberProfile = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Member Details" currentPage="Member Details" />
      <ProfileOne />
      {/* <FooterTwo /> */}
    </>
  );
};

export default MemberProfile;
