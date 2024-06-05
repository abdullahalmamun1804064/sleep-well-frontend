import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { baseUrl } from "../../utils/baseUrl";
import "./appointment.css";

const PatientAppointmentComponent = () => {
  const alert = useAlert();
  const { user } = useSelector((state) => state.auth);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/bookings`);
        setAppointments(data?.data);
      } catch (error) {
        alert.error("Failed to fetch appointments. Please try again.");
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [user]);

  return (
    <div className="container p-5">
      {appointments.length > 0 ? (
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Doctor Name</th>
                  <th>Doctor Specialty</th>
                  <th>Reason</th>
                  <th>Appointment Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  user?._id === appointment.patient?._id && (
                    <tr key={appointment.id}>
                      <td>{appointment?.doctor?.name}</td>
                      <td>{appointment?.doctor?.about}</td>
                      <td>{appointment?.reason}</td>
                      <td>{new Date(appointment?.appointmentTime).toLocaleString()}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="pt-5">No appointments found.</p>
      )}
    </div>
  );
};

export default PatientAppointmentComponent;
