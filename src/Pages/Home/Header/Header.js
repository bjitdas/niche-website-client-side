import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineDirectionsBike } from "react-icons/md";
import useAuth from '../../../Hooks/useAuth';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <span style={{ fontWeight: 600, fontSize: '2rem' }}><MdOutlineDirectionsBike /> BikeBD</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        </Nav>
                        <Nav>
                            {user.email ? <button className="me-1 btn btn-warning rounded" onClick={logOut}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            {user.email && <span className="text-light pt-1 fs-4">{user.photoURL ? <img style={{ borderRadius: '50%', width: '40px' }} src={user?.photoURL} alt="" /> : <span style={{ fontSize: '40px' }}> <FaUserCircle /> </span>} </span>}

                            <span className="text-light pt-4 fs-6 mx-1">{user?.displayName?.split(" ")[0]}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;