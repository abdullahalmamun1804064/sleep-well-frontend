import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../common/Loader/Loader";
import { userDetails, clearErrors } from "../../redux/actions/userActions";

const ProfileOne = () => {
  const { singleUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(userDetails(id));
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error, id]);


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className="project-details  ">
          <div className="shadow p-5 mb-5 bg-white rounded">
            <div className="container pb-5">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="project-details__left">
                    <div className="project-details__img d-flex justify-content-center align-items-center">
                      <img
                        src={singleUser?.avatar?.url}
                        alt={singleUser?.name}
                        className="rounded-circle profile-image "
                      />
                    </div>
                    <div className="text-center left pt-5">
                      <h2>{singleUser?.name}</h2>
                    </div>
                    <div className="text-center">
                      <p>{singleUser?.role}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="project-details__right">
                    {/* <h3 className="project-details__title"></h3> */}
                    <ul className="list-unstyled project-details__list">
                      <li>
                        <div className="left">
                          <h4> Name :</h4>
                        </div>
                        <div className="right">
                          <p>{singleUser?.name}</p>
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>Id :</h4>
                        </div>
                        <div className="right">
                          <p>{singleUser?.id}</p>
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>Batch : </h4>
                        </div>
                        <div className="right">
                          <p>{singleUser?.batch}</p>
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>Department :</h4>
                        </div>
                        <div className="right">
                          <p>{singleUser?.department}</p>
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>Email:</h4>
                        </div>
                        <div className="right">
                          <p>{singleUser?.email}</p>
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>LinkedIn:</h4>
                        </div>
                        <div className="right">
                          {singleUser?.linkedin && (
                            <Link
                              to={singleUser?.linkedin}
                              target="_blank"
                              className="blog-link"
                            >
                              <p>{singleUser?.linkedin}</p>
                            </Link>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>Job Field:</h4>
                        </div>
                        <div className="right">
                          {singleUser?.jobfield ? (

                            <p>{singleUser?.jobfield}</p>

                          ) : <>--</>}
                        </div>
                      </li>
                      <li>
                        <div className="left">
                          <h4>Job Organization:</h4>
                        </div>
                        <div className="right">
                          {singleUser?.joborg ? (

                            <p>{singleUser?.joborg}</p>

                          ) : <>--</>}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfileOne;
