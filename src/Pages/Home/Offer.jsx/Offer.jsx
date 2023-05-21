import React from 'react';
import './Offer.css'

const Offer = () => {
    return (
        <div className='kidBg relative' >
            <div className='text-white absolute h-full lg:w-3/4 lg:left-24  flex justify-center items-center'>
                <div className=' font-bold text-center space-y-5' data-aos="fade-down">
                    <p className='text-orange-400'>Exclusive Offer</p>
                    <h2 className='text-4xl font-bold' >Here ToysLand is going on a surprise deal with you. Hurry up visit our store and take your friday offer</h2>
                    <button className='btn'>CheckOut Now</button>
                </div>
            </div>

        </div>
    );
};

export default Offer;