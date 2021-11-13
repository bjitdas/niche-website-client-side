import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="m-5">
            <h2 className="mb-4 text-success">Hello {user.displayName}!!</h2>
            <h3 className="m-4">This is your <span className="text-danger">BikeBD</span> Dashboard</h3>
                <h6 >See your Order. And you can manage your orders, share <br />  review & experience, payment from <span className="fs-5 text-info">Left bar...</span> </h6>
            </div>
        </div>
    );
};

export default DashboardHome;