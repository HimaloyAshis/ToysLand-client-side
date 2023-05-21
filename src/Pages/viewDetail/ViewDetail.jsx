import React from 'react';
import './ViewDetail.css'
import { useLoaderData, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ViewDetail = () => {
    const toy = useLoaderData()
    const { Toy_Name, Ratting, Seller_Name, Seller_Email, SubCategory, description, Available_Quantity, Price, Url } = toy
    console.log(toy)

    return (
        <div className='detailBG py-8'>
            <h2 className='text-3xl text-center py-8 font-bold'>Take a look, Here is the full description.</h2>
            <div className="card cardBG bg-base-100 shadow-xl w-1/3 mx-auto">
                <figure className="px-10 pt-10">
                    <img src={Url} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Toy Name: {Toy_Name}</h2>
                    <p>Seller_Name : {Seller_Name}</p>
                    <p>Seller_Email : {Seller_Email}</p>
                    <p>Price : {Price}</p>
                    <div className='inline-flex gap-2'>
                        <Rating
                            placeholderRating={Ratting}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                            fullSymbol={<FaRegStar></FaRegStar>}
                        />
                        <p>{Ratting}</p>
                    </div>
                    <p>Description : {description}</p>
                    <div className="card-actions">
                        <button className="btn ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;