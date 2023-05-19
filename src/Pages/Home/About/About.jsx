import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='aboutBg lg:flex p-10'>
            <div className='about w-1/2'>

            </div>
            <div className='aboutText w-1/2 relative'>
                <div className='absolute flex justify-center items-center h-full'>
                    <div className='p-5'>
                        <h2 className='text-2xl font-semibold'>About us</h2>
                        <p>
                            Welcome to ToysLand, the ultimate online destination for all toy enthusiasts! Our virtual toy emporium is a wonderland where children and adults alike can explore a vast collection of toys that ignite the imagination and bring joy to every playtime. From classic toys that have stood the test of time to the latest innovative creations, ToysLand is your gateway to a world of endless fun and adventure.
                        </p>
                        <br />
                        <p>Learning Through Play. Toys are not just for fun; they are powerful learning tools. At ToysLand, we offer also a wide array of educational toys that make learning engaging and exciting.</p>
                        <br />
                        <br />
                        <p>Find Us:</p>
                        <p>Round Square , At ToysLand , Gulshan-1212</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;