import React from "react";

const DoctorBooking = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            {/* This is where you can add content for the first column */}
            {/* Add any content or components you want to include here */}
          </div>
          <div
            className="col-xl-6 col-lg-3 wow fadeInUp p-2 pb-4"
            data-wow-delay="100ms"
          >
            {/* <Link to={`/news/${news?.id}`} className="news_big_title"> */}

            <div className="blog-three__single mb-0">
              <div className="blog-three__img">

                <img src={publicUrl + "assets/images/doctor2.png"} alt="sleeping" />

              </div>
              <div className="blog-three__content">
                <ul className="list-unstyled blog-three__meta">
                </ul>
                <h3 className="blog-three__title">
                  <span> Doctor Appointment</span>
                </h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorBooking;

