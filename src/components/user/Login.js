import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { login, clearErrors } from '../../redux/actions/userActions'
import Loader from '../../common/Loader/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");

    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, isAuthenticated, error, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };





  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className=" p-5 mt-5 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__left">
                    <div className="section-title text-left">
                      <h2 className="section-title__title text-center">Login </h2>
                    </div>
                    <div className="contact-page__form">
                      <form onSubmit={handleSubmit} className="comment-one__form contact-form-validated">
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <input type="email" placeholder="Email address" name="email" value={email} onChange={handleEmailChange} />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="comment-form__input-box">
                              <input type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />
                            </div>
                          </div>


                          <div className="col-xl-12 ">
                            <div className="comment-form__btn-box d-flex justify-content-center">
                              <button type="submit" onClick={(e) => handleSubmit(e)} className="thm-btn comment-form__btn full_button">Login</button>
                            </div>
                          </div>


                          <div className="col-xl-12 pb-5 pt-4 mb-5">
                            <div className="row justify-content-center pb-5 mb-5">
                              <div className="col-xl-6 d-flex justify-content-center">
                                <p>Don’t have an account? <Link to="/register" className="text-success py-5 mb-5 text-center">Register</Link> </p>
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
        )
      }

    </div>
  );
};

export default Login;
