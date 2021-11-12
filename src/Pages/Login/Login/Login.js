import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, signInUsingGoogle, loginUser, isLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location?.state?.from || "/"

    const handleGoogleSign = () => {
        signInUsingGoogle();
        if (user) {
            history.push(url)
        }
    }

    const onSubmit = (data) => {
        const { email, password } = data;
        loginUser(email, password)
        if (user) {
            reset();
            history.push(url)
        }
    }

    return (
        <div>
            <div className="m-5">
                <h1 className="text-primary">Please Log In</h1>
                {isLoading && <Spinner animation="border" variant="primary" />}
                <form style={{ margin: '20px' }} onSubmit={handleSubmit(onSubmit)}>

                    <input className="w-50 p-2 border border-dark rounded" {...register("email", { required: true })} placeholder="Your Email" />

                    <br />

                    <input className="w-50 p-2 m-3 border border-dark rounded" type="password" {...register("password", { required: true })} placeholder="Your Password" />

                    <br />

                    <input className="w-50 p-2 btn-warning fs-4  border border-dark rounded" type="submit" />

                </form>
                <Link to="/register" style={{ textDecoration: 'none', fontSize: '25px', fontWeight: 600 }}>
                    <span>New User? Pleaser Register.</span>
                </Link>
            </div>
            <p className="my-4">-----------------or----------------</p>
            <div className="d-flex border border-2 boder-warning rounded w-25 mx-auto m-5">
                <span className="bg-light px-3 fs-2"><FcGoogle /></span><button onClick={handleGoogleSign} className="btn btn-primary w-100 p-3 fs-5">  Log in with Google</button>
            </div>
        </div>
    );
};

export default Login;