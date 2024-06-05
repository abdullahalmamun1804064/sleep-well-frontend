import React from 'react';
import {Link} from 'react-router-dom';

export default class FooterTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <footer className="site-footer">
                    <div className="site-footer__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__column footer-widget__about">
                                        <div className="footer-widget__about-logo">
                                            <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/resources/logo.png"} alt="" /></Link>
                                        </div>
                                        <ul className="list-unstyled footer-widget__list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-back-in-time"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Open Hours of Government: sun - Thurs 9.00 am. - 5.00 pm.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-place"></span>
                                                </div>
                                                <div className="text">
                                                    <p>PaharTali, Raozan Chittagong, Bangladesh</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-call"></span>
                                                </div>
                                                <div className="text">
                                                    <p><a href="tel:09969569535">016000000</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="footer-widget__social">
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__service clearfix">
                                        
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__column footer-widget__map clearfix">
                                        <h3 className="footer-widget__title">Our Maps</h3>
                                        <div className="footer-widget__map-box">

                                            <iframe
                                                title="Map"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.124687907007!2d91.96848427398133!3d22.461948237019328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2z4Kaa4Kaf4KeN4Kaf4KaX4KeN4Kaw4Ka-4KauIOCmquCnjeCmsOCmleCnjOCmtuCmsiDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCnnyAo4Kaa4KeB4Kef4KeH4KafKQ!5e0!3m2!1sbn!2sbd!4v1701281397122!5m2!1sbn!2sbd"
                                              ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="site-footer__bottom">
                        <div className="container">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© 2022 Copyright by <a href="https://themeforest.net/user/unicktheme">unicktheme</a></p>
                            </div>
                        </div>
                    </div> */}
                </footer>
            </>
        )
    }
}