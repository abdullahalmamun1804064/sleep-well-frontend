import React from 'react'
import SleepQualityCard from './SleepQualityCard'
import DoctorBooking from './DoctorBooking'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div className='py-2 my-2'>
      <div className="row w-100">
        <div className="col-xl-6">
          <Link to='/sleeping-test' >
             <SleepQualityCard/>
          </Link>

         
        </div>
        <div className="col-xl-6">
        <Link to='/doctor' >
            <DoctorBooking />
        </Link>
       
        </div>
      </div>
    </div>
  )
}

export default HomeComponent