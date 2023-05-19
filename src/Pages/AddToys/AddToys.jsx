import React from 'react';
import { useForm } from 'react-hook-form';
import './AddToys.css'

const AddToys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addToys', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        console.log(data);
    }




    return (
        <>
            <div className='p-20 input-bg'>
                <h2 className='text-center font-bold text-3xl py-6'>Add your Toys</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='gap-5 grid grid-cols-1 lg:grid-cols-2 w-2/3 mx-auto'>

                    <input className='input' defaultValue="test" {...register("Url")} type='' placeholder='Url' />

                    <input className='input' defaultValue="test" {...register("Toy_Name")} type='' placeholder='Toy_Name' />

                    <input className='input' defaultValue={''} {...register("Seller_Name", { required: true })} placeholder='SellerName' />
                    <input className='input' defaultValue={''} {...register("Seller_Email", { required: true })} placeholder='Seller_Email' />
                    <select className='input' {...register("SubCategory")}>
                        <option value="Animated_character">Animated character</option>
                        <option value="Disney_princess">Disney princess</option>
                        <option value="Frozen_dolls">Frozen dolls</option>
                    </select>
                    <input className='input' defaultValue={''} {...register("Price", { required: true })} placeholder='Price' />
                    <input className='input' defaultValue={''} {...register("Ratting", { required: true })} placeholder='Ratting' />
                    <input className='input' defaultValue={''} {...register("Available_Quantity", { required: true })} placeholder='Available_Quantity' />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn w-full mx-auto' type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddToys;