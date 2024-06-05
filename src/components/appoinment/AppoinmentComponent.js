import React from 'react'
import PataientAppoinmentComponent from './PataientAppoinmentComponent'
import DoctorAppoinmentComponent from './DoctorAppoinmentComponent'
import { useSelector } from 'react-redux';

const AppoinmentComponent = () => {
  const { user } = useSelector((state) => state.auth);


  return (
    <div>
      {user?.role==='patient' ?
      <PataientAppoinmentComponent />
        :
      <DoctorAppoinmentComponent />
  }
    </div>
  )
}

export default AppoinmentComponent;