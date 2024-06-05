import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';
import Profile from './pages/Profile';
import Login from './pages/Login';

import Register from './pages/Register';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import { loadUser } from './redux/actions/userActions'
import store from './store'
import Doctor from './pages/Doctor';
import Booking from './pages/Booking';
import Appoinment from './pages/Appoinment';
import SleepingTest from './pages/SleepingTest';


function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
    store.dispatch(loadUser())
  }, []
  );
  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route path={`/`} exact element={<HomeDefault />} />
        <Route path={`/about`} exact element={<About />} />
     
        <Route path={`/contact`} exact element={<Contact />} />
    
        {/* Authentication */}
        <Route path={"/login"} exact element={<Login />} />
        
        <Route path={"/register"} exact element={<Register />} />
        <Route path={"/profile"} exact element={<Profile />} />
        <Route path={"/doctor"} exact element={<Doctor />} />
        <Route path={"/doctor-booking/:doctorId"} exact element={<Booking />} />
        <Route path={"/appointment-list"} exact element={<Appoinment />} />
        <Route path={"/sleeping-test"} exact element={<SleepingTest />} />




        
        <Route path={`/*`} exact element={<Error />} />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;