import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const { heading, currentPage, Img } = props;
    const publicUrl = process.env.PUBLIC_URL + '/';
    const current = currentPage ? currentPage : heading;
    const backgroundImage = Img ? `url(${publicUrl}assets/images/backgrounds/${Img})` : '';

    return (
        <>
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage }}></div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{heading}</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                            <li><span>/</span></li>
                            <li className="active">{current}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Breadcrumb;
