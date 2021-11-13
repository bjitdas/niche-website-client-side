import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const { name, img, description, price } = product;
    const { user } = useAuth();
    const history = useHistory()

    useEffect(() => {
        fetch(`https://safe-cove-84199.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo }
        newInfo[field] = value;
        setOrderInfo(newInfo)
    }

    const handleOrderSubmit = e => {

        //collect data from the form
        const order = {
            ...orderInfo,
            productName: name,
            price: price
        }

        axios.post('https://safe-cove-84199.herokuapp.com/orders', order)
            .then(res => {
                if (res.data.insertedId) {
                    history.push('/orderplaced')
                }
            })

        e.preventDefault()
    }


    return (
        <div className="m-4">
            <Container>
                <h3 className="m-3 text-warning"> You Can Place Order From Here
                </h3>
                <Row>
                    <Col className="border-end border-2 border-secondary" md={5}>
                        <h3 className="m-3 text-decoration-underline text-primary">Product Details </h3>
                        <img width="90%" height="400px" src={img} alt="" />
                        <h6 style={{ color: '#C0392B' }}>{description}</h6>
                    </Col>
                    <Col md={7}>
                        <div>
                            <form onSubmit={handleOrderSubmit}>
                                <input className="m-2 w-75 p-2 border-1 rounded"
                                    name="productName"
                                    disabled
                                    defaultValue={name}
                                    onBlur={handleOnBlur}
                                />
                                <input className="m-2 w-75 p-2 border-1 rounded"
                                    name="price"
                                    disabled
                                    defaultValue={price}
                                    onBlur={handleOnBlur}
                                />
                                <input className="m-2 w-75 p-2 border-1 rounded"
                                    name="customerName"
                                    defaultValue={user?.displayName}
                                    placeholder="Your Name"
                                    onBlur={handleOnBlur}
                                />
                                <input className="m-2 w-75 p-2 border-1 rounded"
                                    name="email"
                                    disabled
                                    defaultValue={user.email}
                                    onBlur={handleOnBlur}
                                />
                                <input className="m-2 w-75 p-2 border-1 rounded"
                                    name="phone"
                                    defaultValue="Your Phone"
                                    onBlur={handleOnBlur}
                                    placeholder="Your Phone"
                                />

                                <input className="m-2 w-75 p-2 border-1 bg-warning rounded" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;