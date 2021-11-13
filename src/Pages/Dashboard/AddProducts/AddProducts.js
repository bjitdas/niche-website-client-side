import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://safe-cove-84199.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset()
                }
            });

    };


    return (
        <div>
            <h1 className="">Please, Add a Product</h1>
            {success && <Alert variant="success">
                Successfully Product Added
            </Alert>}
            <form className="d-flex flex-column w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>

                <input className="mt-3 p-2 border-1 rounded" {...register("name", { required: true })} placeholder="name" />

                <textarea className="mt-3 p-2 border-1 rounded" {...register("description")} placeholder="description" />

                <input className="mt-3 p-2 border-1 rounded" type="number" {...register("price")} placeholder="price" />

                <input className="mt-3 p-2 border-1 rounded" {...register("img")} placeholder="image-url" />

                <input className="mt-3 bg-danger border-1 rounded text-light fs-4" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;