import './HomeToyDetail.css'
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { FaBeer, FaRegStar, FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const HomeToyDetail = () => {
    const detail = useLoaderData()

    
    const { name, picture, price, rating, subCategory, variety } = detail
    return (
        <div className='detailBG py-8'>

            <Helmet>
                <title>ToysLand | Toy detail page</title>
            </Helmet>
            <h2 className='text-4xl text-[#F0F0F0] text-center pt-8 font font-bold'>Take a look, Here is the full description.</h2>
            <hr className='border-2   w-2/4 m-auto mb-8 mt-3' />

            <div className="card cardBG bg-base-100 shadow-xl lg:w-1/3 mx-auto">
                <figure className="p-4">
                    <img src={picture} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-[#F0F0F0]">Name: {name}</h2>
                    <p className='text-[#F0F0F0]'>Price : {price}</p>
                    <div className='inline-flex gap-2'>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                            fullSymbol={<FaRegStar></FaRegStar>}
                        />
                        <p className='text-[#F0F0F0]'>{rating}</p>
                    </div>
                    <p className='text-[#F0F0F0]'>SubCategory : {subCategory}</p>
                    <p className='text-[#F0F0F0]'>variety : {variety}</p>
                    <div className="card-actions">
                        <button className="btn ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeToyDetail;