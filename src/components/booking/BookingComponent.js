import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseUrl } from "../../utils/baseUrl";

const BookingComponent = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const { doctorId } = useParams();
  const { user } = useSelector((state) => state.auth);

  const [booking, setBooking] = useState({
    patient: user ? user?._id : "",
    doctor: doctorId || "",
    appointmentTime: "",
    reason: ""
  });

  const { appointmentTime, reason } = booking;

  useEffect(() => {
    if (doctorId) {
      setBooking((prevBooking) => ({ ...prevBooking, doctor: doctorId, patient: user?._id }));
    }
  }, [doctorId, user]);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/bookings`, booking);
      alert.success("Appointment booked successfully!");
      navigate("/"); // Redirect to home or a confirmation page
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert.error("Failed to book appointment. Please try again.");
    }
  };

  return (
    <section className="p-5 mt-5 donate-now__personal-info-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6">
            <div className="contact-page__left p-0 m-0">
              <div className="contact-page__form">
                <form onSubmit={handleSubmit} className="comment-one__form contact-form-validated" noValidate>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <label htmlFor="appointmentTime">Appointment Date and Time</label>
                        <input
                          type="datetime-local"
                          id="appointmentTime"
                          name="appointmentTime"
                          value={appointmentTime}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <label htmlFor="reason">Reason for Appointment</label>
                        <textarea
                          id="reason"
                          name="reason"
                          value={reason}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="comment-form__btn-box d-flex justify-content-center">
                        <button type="submit" className="thm-btn comment-form__btn full_button">Book Appointment</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingComponent;
