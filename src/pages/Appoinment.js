import React from 'react'
import HeaderOne from '../common/header/HeaderOne'
import FooterTwo from '../common/footer/FooterTwo'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'
import AppoinmentComponent from '../components/appoinment/AppoinmentComponent'

const Appoinment = () => {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb heading="Appointment List" currentPage="appointment-list" />
      <AppoinmentComponent />
      <FooterTwo />

    </div>
  )
}

export default Appoinment