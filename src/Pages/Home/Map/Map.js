import React from 'react';
import img from '../../../images/map.png'

const Map = () => {
    return (
        <div className="my-5">
            <div className="text-light">
                <h1 className="text-info bg-secondary p-5">OUR RETAIL STORE</h1>
                <div style={{ backgroundColor: '#34495E', padding: '30px' }}>
                    <h3 className="text-info"><span className="fs-1 text-danger">BikeBD</span> is Now in Bangldesh.</h3>
                    <h4>Our Opening Hours</h4>
                    <h4 className="text-warning">Mon - Fri: 9.00AM-10.00PM</h4>
                    <h4 className="text-warning">SAT: 10.00AM - 9.00PM</h4>
                </div>
                <div style={{ width: '100%' }} >
                    <img className="w-100" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Map;