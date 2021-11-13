import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.put('https://safe-cove-84199.herokuapp.com/users/admin', data)
            .then(res => {
                if (res.data.matchedCount) {
                    setSuccess(true);
                    reset();
                }
            })
    };

    return (
        <div>
            <h2><span className="text-light bg-primary p-2">Make Admin</span></h2>
            {success && <p>
                <Alert variant="success">
                    successfully added admin
                </Alert>
            </p>}
            <div>
                <form className="d-flex flex-column w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>

                    <input type="email" className="mt-3 p-2 border-1 rounded" {...register("email")} placeholder="E-mail" />

                    <input className="mt-3 bg-danger border-1 rounded text-light fs-4" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;