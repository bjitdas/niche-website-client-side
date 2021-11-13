import React from 'react';
import img1 from '../../../images/bkash.jpg'
import img2 from '../../../images/visa.jpg'
import img3 from '../../../images/mastercardjpg.jpg'

const Payment = () => {
    return (
        <div>
            <p className="m-5 fs-2 fw-bolder">Order Payment</p>
            <div>
                <span className="fs-2 me-5 pe-5">bkash</span>
                <span className="fs-2 m-4">Visa Card</span>
                <span className="fs-2 ms-4 ps-5"> Master Card</span>
            </div>
            <div className="d-flex mx-4">
                <img style={{ width: '30%', height: '120px', border: '2px solid #C0392B' }} src={img1} alt="" />
                <img className="mx-3" style={{ width: '30%', height: '120px', border: '2px solid #C0392B' }} src={img2} alt="" />
                <img style={{ width: '30%', height: '120px', border: '2px solid #C0392B' }} src={img3} alt="" />
            </div>
        </div>
    );
};

export default Payment;