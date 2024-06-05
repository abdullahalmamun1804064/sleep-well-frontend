import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { register, clearErrors } from '../../redux/actions/userActions'

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    phone: "",
    address: "",
    role: "patient",
    about: "" // Adding the 'about' field
  });

  const { name, email, password, confirmPassword, age, phone, address, role, about } = user;

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch, email]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('confirmPassword', confirmPassword);
    formData.set('age', age);
    formData.set('phone', phone);
    formData.set('address', address);
    formData.set('role', role);
    formData.set('about', about); // Adding 'about' to form data
    dispatch(register(formData));
    navigate("/");
  };

  return (
    <>
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
                          <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="email" placeholder="Email address" name="email" value={email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="text" placeholder="Age" name="age" value={age} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="text" placeholder="Address" name="address" value={address} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="text" placeholder="About" name="about" value={about} onChange={handleChange} /> {/* Adding the 'about' input */}
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                        </div>
                      </div>
                     
                      <div className="col-xl-12">
                        <div className="comment-form__btn-box d-flex justify-content-center">
                          <button type="submit" className="thm-btn comment-form__btn full_button">Register</button>
                        </div>
                      </div>
                      <div className="col-xl-12 pb-5 pt-4 mb-5">
                        <div className="row justify-content-center pb-5 mb-5">
                          <div className="col-xl-6 d-flex justify-content-center">
                            <p>Already have an account? <Link to="/login" className="text-success py-5 mb-5 text-center">Login</Link> </p>
                          </div>
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
    </>
  );
};

export default Register;
