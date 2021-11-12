import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, signInUsingGoogle, registerUser, isLoading } = useAuth();

    const history = useHistory();

    const handleGoogleSign = () => {
        signInUsingGoogle();
        if (user) {
            history.push('/')
        }
    }

    const onSubmit = (data) => {
        const { name, email, password, password2 } = data;

        if (password === password2) {
            registerUser(name, email, password)
            if (user) {
                reset();
                history.push('/')
            }

        }
        else if (password !== password2) {
            return;
        }
    };


    return (
        <div>
            <div className="m-5">
                <h1 className="text-primary">Please Register</h1>
                <form style={{ margin: '20px' }} onSubmit={handleSubmit(onSubmit)}>

                    <input className="w-50 p-2 border border-dark rounded" {...register("name", { required: true })} placeholder="Your Name" />

                    <br />
                    <input className="w-50 m-2 p-2 border border-dark rounded" {...register("email", { required: true })} placeholder="Your Email" />

                    <br />
                    <input className="w-50 p-2 m-2 border border-dark rounded" type="password" {...register("password", { required: true })} placeholder="Your Password" />

                    <br />

                    <input className="w-50 p-2 m-2 border border-dark rounded" type="password" {...register("password2", { required: true })} placeholder="Re-Enter Your Password" />

                    <br />

                    <input className="w-50 p-2 btn-warning fs-4  border border-dark rounded" type="submit" />

                    {isLoading && <Spinner animation="border" variant="primary" />}
                </form>
                <Link to="/login" style={{ textDecoration: 'none', fontSize: '25px', fontWeight: 600 }}>
                    <span>Already Registered? Pleaser Log In.</span>
                </Link>
            </div>
            <p className="my-4">-----------------or----------------</p>
            <div className="d-flex border border-2 boder-warning rounded w-25 mx-auto m-5">
                <span className="bg-light px-3 fs-2"><FcGoogle /></span><button onClick={handleGoogleSign} className="btn btn-primary w-100 p-3 fs-5">  Log in with Google</button>
            </div>
        </div>
    );
};

export default Register;