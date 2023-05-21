import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Home.css'
import Gallery from '../Gallery/Gallery';
import Offer from './Offer.jsx/Offer';
import About from './About/About';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';
import { FaBeer, FaRegStar, FaStar } from 'react-icons/fa';



const Home = () => {
    const [tab, setTab] = useState('Animated character')
    const [toys, setToys] = useState([])
    console.log('home', toys)
    const { user } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)


    useEffect(() => {
        fetch(`http://localhost:5000/toys/${tab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [tab])

    

    useEffect(() => {
        const routeName = location.pathname 
        document.title = `ToysLand - ${routeName}`;
    }, [location.pathname]);


    const handleUser = () => {
        if (!user) {
            toast('You have to log in first to se viewDetail')
        }
    }


    return (
        <>
            <div className='BPic text-white relative'>
                <div className='absolute flex justify-center items-center left-0 h-full w-1/2 p-10'>
                    <div className='' data-aos="fade-up"
                        data-aos-duration="2000">
                        <h2 className='text-5xl font font-bold'>30% OFF For Summer Sale</h2>
                        <p className='text-4xl font font-bold'>Here ToysLand give more flexible opportunity for all</p>
                    </div>
                </div>
            </div>
            <Gallery></Gallery>
            <div className='subBBg lg:p-12'>
                <h1 className='text-center text-3xl font-bold py-3'>Shop By Category</h1>
                <Tabs >
                    <TabList>
                        <Tab onClick={() => setTab('Animated character')}>Animated character</Tab>
                        <Tab onClick={() => setTab('Disney_princess')}>Disney princess</Tab>
                        <Tab onClick={() => setTab('Frozen dolls')}>Frozen dolls</Tab>
                    </TabList>

                    <TabPanel>
                        <ToastContainer></ToastContainer>
                        <div className='lg:flex lg:w-3/4 gap-6 mx-auto' >
                            {
                                toys.map(toy =>
                                    <div key={toy._id} className="card lg:w-96 bg-base-100 subBg shadow-xl" >
                                        <figure className="p-5">
                                            <img src={toy.picture} alt="Shoes" className="rounded-xl w-full" />
                                        </figure>
                                        <div className="card-body " >
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>{toy.price}</p>
                                            <div className='inline-flex gap-2'>
                                                <Rating
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                                                    fullSymbol={<FaRegStar></FaRegStar>}
                                                />
                                                <p>{toy.rating}</p>
                                            </div>
                                            <div className="card-actions" >
                                                <Link onClick={handleUser} to={`/homeToyDetail/${toy._id}`} className="btn ">View Details</Link>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='lg:flex lg:w-3/4 gap-6 mx-auto'>
                            {
                                toys.map(toy =>
                                    <div key={toy._id} className="card lg:w-96 bg-base-100 subBg shadow-xl ">
                                        <figure className="p-5">
                                            <img src={toy.picture} alt="Shoes" className="rounded-xl w-full" />
                                        </figure>
                                        <div className="card-body ">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>{toy.price}</p>
                                            <div className='inline-flex gap-2'>
                                                <Rating
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                                                    fullSymbol={<FaRegStar></FaRegStar>}
                                                />
                                                <p>{toy.rating}</p>
                                            </div>
                                            <div className="card-actions">
                                                <Link to={`/homeToyDetail/${toy._id}`} className="btn ">View Details</Link>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='lg:flex lg:w-3/4 gap-6 mx-auto'>
                            {
                                toys.map(toy =>
                                    <div key={toy._id} className="card lg:w-96 bg-base-100 subBg shadow-xl">
                                        <figure className="p-5">
                                            <img src={toy.picture} alt="Shoes" className="rounded-xl w-full" />
                                        </figure>
                                        <div className="card-body ">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>{toy.price}</p>
                                            <div className='inline-flex gap-2'>
                                                <Rating
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                                                    fullSymbol={<FaRegStar></FaRegStar>}
                                                />
                                                <p>{toy.rating}</p>
                                            </div>
                                            <div className="card-actions">
                                                <Link to={`/homeToyDetail/${toy._id}`} className="btn ">View Details</Link>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <Offer></Offer>
            <About></About>
        </>
    );
};

export default Home;