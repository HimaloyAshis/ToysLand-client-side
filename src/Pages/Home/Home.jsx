import React from 'react';
import './Home.css'
import Gallery from '../Gallery/Gallery';
const Home = () => {
    return (
        <>
            <div className='BPic text-white relative'>
                <div className='absolute flex justify-center items-center left-0 h-full w-1/2 p-10'>
                    <div className=''>
                        <h2 className='text-5xl font'>30% OFF For Summer Sale</h2>
                        <p className='text-4xl font'>Here ToysLand give more flexible opportunity for all</p>
                    </div>
                </div>
            </div>
            <Gallery></Gallery>
        </>
    );
};

export default Home;