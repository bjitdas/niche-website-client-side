import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://safe-cove-84199.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div className="my-5" style={{ padding: '30px', backgroundColor: '#154360' }}>
            <div className="w-75 mx-auto">
                <h2 className="text-danger">Customer Reviews</h2>
                <Row xs={12} md={2}>
                    {
                        reviews.map(review => <CustomerReview
                            key={review._id}
                            buyerReview={review}
                        ></CustomerReview>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default CustomerReviews;