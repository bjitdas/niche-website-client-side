import React from 'react';
import { FaUserCircle } from "react-icons/fa";


const CustomerReview = ({ buyerReview }) => {
    const { name, img, review, Rating } = buyerReview;
    console.log(Rating)
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
                    <p>Rating: {Rating} </p>
                    <p> {review}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;