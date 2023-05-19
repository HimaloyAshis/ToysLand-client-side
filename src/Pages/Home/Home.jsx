import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Home.css'
import Gallery from '../Gallery/Gallery';
const Home = () => {



    useEffect(() => {
        fetch(`http://localhost:5000/toys/Disney_princess`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

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
            <div className='subBg'>
                <Tabs >
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Home;