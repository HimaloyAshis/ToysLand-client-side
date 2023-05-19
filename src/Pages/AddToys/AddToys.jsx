import React from 'react';
import { useForm } from 'react-hook-form';
import './AddToys.css'

const AddToys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input className='input' defaultValue="test" {...register("Url")} type='' placeholder='Url' />

            <input {...register("exampleRequired", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default AddToys;