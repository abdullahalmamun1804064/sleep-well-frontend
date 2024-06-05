import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import FooterTwo from '../common/footer/FooterTwo';

const Error = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="404 Error"
                currentPage="404 Error"
            />
            <ErrorContent />
            <FooterTwo />
        </>
    )
}

export default Error;