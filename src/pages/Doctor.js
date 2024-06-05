import React from 'react'
import DoctorCard from '../components/doctor/DoctorCard'
import HeaderOne from '../common/header/HeaderOne'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'
import FooterTwo from '../common/footer/FooterTwo'

const Doctor = () => {
  return (
    <div>
     
      <HeaderOne />
      <Breadcrumb heading="Doctor" currentPage="doctor" />

      <DoctorCard />

      <FooterTwo />
    </div>
  )
}

export default Doctor