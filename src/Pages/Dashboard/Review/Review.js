import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        const review = { ...data, name: user?.displayName, email: user.email, img: user.photoURL }

        axios.post('http://localhost:5000/reviews', review)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    alert('successfully shared your review')
                }
            })
    };

    return (
        <div>
            <h2>Share your Experience & give us Rating </h2>
            <form className="d-flex flex-column w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>

                <textarea className="mt-3 p-2 border-1 rounded" {...register("review")} placeholder="review" />


                <input className="mt-3 p-2 border-1 rounded" type="number" {...register("Rating", { min: 0, max: 5 })} placeholder="Rating" />

                <input className="mt-3 bg-danger border-1 rounded text-light fs-4" type="submit" />

            </form>
        </div>
    );
};

export default Review;