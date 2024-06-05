import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { clearErrors, logout } from "../../redux/actions/userActions";
const publicUrl = process.env.PUBLIC_URL + '/';

const Nav = () => {

  const { isAuthenticated, error, user } = useSelector(
    (state) => state.auth,
  );


  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, navigate]);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
    navigate("/");
  };

  return (
    <div>
        <div className="sticky main-menu text-center mr-5 pr-5">
          <nav className="d-flex ">
          <ul className="main-menu__list relevent ">
            <li>
              <Link to={`/`}>Home </Link>
            </li>
              <li>
                <Link to={`/doctor`}>Doctor</Link>
              </li>
            <li>
              <Link to={`/about`}>About Us</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          

              {user ? (
                <div className="">
                  <li className="dropdown">
                    {user.avatar ? (
                      <img
                        src={user.avatar.url}
                        alt={user.name}
                        
                      className="user-pic"
                      />
                    ) : (
                      <>
                        <img src={publicUrl + "assets/images/resources/logo.png"} alt="" />

                      </>
                    )}

                  <ul className="profile-dropdown">
                    <li>
                      <Link to={`/appointment-list`}>Appointment</Link>
                    </li>
                      <li>
                        <Link to={`/profile`}>Profile</Link>
                      </li>
                      <li>
                        <Link to={`#`} onClick={logoutHandler}>
                        
                           
                            Logout
                          
                        </Link>
                      </li>
                    </ul>
                  </li>
                </div>
              ) : (
               
                  <ul className="main-menu__list relevent px-5">
                    <li>
                      <Link to={`/login`} className="">
                        Login
                      </Link>
                    </li>
                  </ul>
                // )
              )}
            </ul>
          </nav>
        </div>
   
    </div>
  );
};

export default Nav;
