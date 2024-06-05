import React from 'react'
import HeaderOne from '../common/header/HeaderOne'
import FooterTwo from '../common/footer/FooterTwo'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'
import SleepingTestComponent from '../components/sleepingTest/SleepingTestComponent'

const SleepingTest = () => {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb heading="Doctor appointment" currentPage="appointment" />
      <SleepingTestComponent />
      <FooterTwo />

    </div>
  )
}

export default SleepingTest