import React from 'react';
import './HomeToyDetail.css'
import { useLoaderData } from 'react-router-dom';

const HomeToyDetail = () => {
    const detail = useLoaderData()
    const {name,picture,price,rating,subCategory,variety} = detail
    console.log(detail)
    return (
        <div className='detailBG py-8'>
            <h2 className='text-3xl text-center py-8 font'>Take a look, Here is the full description.</h2>
            <div className="card cardBG bg-base-100 shadow-xl w-1/3 mx-auto">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price : {price}</p>
                    <p>Ratting : {rating}</p>
                    <p>SubCategory : {subCategory}</p>
                    <p>variety : {variety}</p>
                    <div className="card-actions">
                        <button className="btn ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeToyDetail;