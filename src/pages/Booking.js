import React from 'react'
import BookingComponent from '../components/booking/BookingComponent'
import HeaderOne from '../common/header/HeaderOne'
import FooterTwo from '../common/footer/FooterTwo'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'

const Booking = () => {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb heading="Doctor appointment" currentPage="appointment" />
      <BookingComponent />
      <FooterTwo/>
     
    </div>
  )
}

export default Booking