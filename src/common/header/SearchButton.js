import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const SearchButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <li><a href="#" className="search-toggler" variant="primary" onClick={handleShow}> <i className="fa fa-search"></i> Search</a></li>
            <div className="search-popup">
                <Modal show={show} onHide={handleClose} className="search-popup__overlay search-toggler">
                <div className="search-popup__content">
                    <form action="#">
                        <label for="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="icon-search-interface-symbol"></i>
                        </button>
                    </form>
                </div>
                </Modal>
            </div>
        </>     
    )
}

export default SearchButton;