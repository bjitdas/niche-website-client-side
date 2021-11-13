import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const CustomerReview = ({ buyerReview }) => {
    const { name, img, review, Rating } = buyerReview;

    return (
        <div>
            <div className="d-flex m-4 p-4 border border-2 border-dark bg-light rounded">
                <div>
                    {
                        img ?
                            <img style={{ padding: '20px', borderRadius: '50%' }} src={img} alt="" /> :
                            <span style={{ fontSize: '100px' }}> <FaUserCircle /> </span>
                    }
                </div>
                <div>
                    <h5>{name}</h5>
                    <div style={{ color: 'goldenrod', fontSize: '20px' }}>
                        {[...Array(parseInt(Rating))].map(star => {
                            return <FaStar />
                        })}

                    </div>
                    <p> {review}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;