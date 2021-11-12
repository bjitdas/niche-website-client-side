import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import AddProducts from './AddProducts/AddProducts';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="my-5 mx-2">
            <Row>
                <Col md={3}>
                    <div className="border-end border-2 border-secondary">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Link to={`${url}`}>Dashboard</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/addproducts`}>Add Products</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/makeadmin`}>Make Admin</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/myorders`}>My Order</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/manageorders`}>Manage Orders</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/payment`}>Payment</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to={`${url}/review`}>Review</Link>
                            </ListGroup.Item>

                        </ListGroup>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="border-start border-2 border-primary">

                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </Route>
                            <Route path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                        </Switch>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;