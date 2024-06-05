import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { Link } from "react-router-dom";

const DoctorCard = () => {

  const [doctorUsers, setDoctorUsers] = useState([]);
  const publicUrl = process.env.PUBLIC_URL + "/";
 
  useEffect(() => { 

    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users`);
        const users = response?.data?.users || [];
        const doctorUsers = users.filter((user) => user.role === "doctor");
        setDoctorUsers(doctorUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {doctorUsers?.map((user) => (
            <div key={user?._id} className="col-xl-3 col-lg-3 my-3" data-wow-delay="100ms">
              <div className="blog-three__single ">
                <div className="blog-three__img">
                  {user?.avatar?.url ? (
                    <img src={user?.avatar?.url} alt="sleeping" style={{height: "300px"}}/>
                  ) : (
                      <img src={publicUrl + "assets/images/doctor2.png"} alt="sleeping" style={{ height: "300px" }} />
                  )}
                </div>
                <div className="blog-three__content m-0">
                  <ul className="list-unstyled blog-three__meta"></ul>
                  <h3 className="blog-three__title">
                    <span>{user?.name}</span>
                  </h3>
                  <p>{user?.about?.slice(0, 100)}</p>
                  <Link to={`/doctor-booking/${user?._id}`}>
                    <button className="thm-btn comment-form__btn py-3 my-3 w-100">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
