import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import HomeProducts from '../HomeProducts/HomeProducts';
import Map from '../Map/Map';


const Home = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }

    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <CustomerReviews></CustomerReviews>
            <Map></Map>
        </div>
    );
};

export default Home;