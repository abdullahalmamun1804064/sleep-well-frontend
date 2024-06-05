import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import TopBar from '../../db/admin/topBar.json'
import axios from '../../utils/axios';
const HeaderTwo = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => { 
       
            setData(TopBar.data)
        } 
        fetchData()
    }, [])


    const publicUrl = process.env.PUBLIC_URL + '/';

    return (
        <>
            <header className="main-header clearfix">
                <div className="main-header__top clearfix">
                    <div className="container clearfix">
                        <div className="main-header__top-inner clearfix">
                            <div className="main-header__top-left">
                                <ul className="list-unstyled main-header__top-address">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-call"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="tel:5204654544">{data.phone}</a></p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="main-header__top-right">
                                <ul className="list-unstyled main-header__top-right-content text-white">
                                  
                                    <li className='d-flex'>
                                        <div className="icon px-3">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:demo@example.com">{data.email}</a></p>
                                        </div>
                                    </li>
                                    <li className='d-flex'>
                                        <div className="icon px-3">
                                            <span className="icon-place"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:demo@example.com">{data.address}</a></p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu ">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link to={process.env.PUBLIC_URL + `/`}>
                                        <img src={publicUrl + "assets/images/resources/logo.png"} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-menu-wrapper__right">
                                    <div className="main-menu-wrapper__main-menu d-flex ">
                                        <MobileMenu />
                                        <Nav />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderTwo;
