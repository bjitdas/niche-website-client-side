import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProducts from './AddProducts/AddProducts';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div className="my-5 mx-2">
            <Row>
                <Col md={3}>
                    <div className="border-end border-2 border-secondary">
                        <div className="dashboard-content">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                    <Link to={`${url}`}>Dashboard</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/myorders`}>My Order</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/payment`}>Payment</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/review`}>Review</Link>
                            </ListGroup.Item>
                            {admin && <>
                            <ListGroup.Item>
                                    <Link to={`${url}/addproducts`}>Add Products</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Link to={`${url}/makeadmin`}>Make Admin</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Link to={`${url}/manageorders`}>Manage Orders</Link>
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to={`${url}/manageproducts`}>Manage Products</Link>
                                </ListGroup.Item>
                            </>}
                        </ListGroup>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="border-start border-2 border-primary">

                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <AdminRoute path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                        </Switch>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;