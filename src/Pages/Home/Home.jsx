import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Home.css'
import Gallery from '../Gallery/Gallery';
import Offer from './Offer.jsx/Offer';
import About from './About/About';
const Home = () => {
    const [tab, setTab] = useState('Animated character')
    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/toys/${tab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [tab])



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
            <div className='subBBg p-12'>
                <Tabs >
                    <TabList>
                        <Tab onClick={() => setTab('Animated character')}>Title 1</Tab>
                        <Tab onClick={() => setTab('Disney_princess')}>Title 2</Tab>
                        <Tab onClick={() => setTab('Frozen dolls')}>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='lg:flex w-3/4 gap-6 mx-auto'>
                            {
                                toys.map(toy =>
                                    <div className="card w-96 bg-base-100 subBg shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={toy.picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body ">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>{toy.price}</p>
                                            <div className="card-actions">
                                                <button className="btn ">View Details</button>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    
                    </TabPanel>
                    <TabPanel>
                        <div className='lg:flex w-3/4 gap-6 mx-auto'>
                            {
                                toys.map(toy =>
                                    <div className="card w-96 bg-base-100 subBg shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={toy.picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body ">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>{toy.price}</p>
                                            <div className="card-actions">
                                                <button className="btn ">View Details</button>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='lg:flex w-3/4 gap-6 mx-auto'>
                            {
                                toys.map(toy =>
                                    <div className="card w-96 bg-base-100 subBg shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={toy.picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body ">
                                            <h2 className="card-title">{toy.name}</h2>
                                            <p>{toy.price}</p>
                                            <div className="card-actions">
                                                <button className="btn ">View Details</button>
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