import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaStar } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footBGC px-2 py-14 grid grid-cols-1 lg:grid-cols-4 '>
            <div className='space-y-4'>
                <p className='inline-flex items-center text-white'>T<FaStar className='text-orange-500'></FaStar>ysLand </p>
                <p className='text-orange-500'>Subscribe Us</p>
                <br />
                <input type="email" className='h-10 p-2 rounded text-black' name="email" id="" />
                <button className='btn ml-2 text-white'>Sign in</button>
                <p></p>
            </div>
            <div className='text-white space-y-4'>
                <h2>Service Items</h2>
                <Link>Toys</Link>
                <br />
                <Link>All Product</Link>
            </div>
            <div className='text-white space-y-4'>
                <h2>Privacy</h2>
                <Link>Terms & condition</Link>
                <p>&copy; ToysLand</p>
                <br />
                <hr />
            </div>
            <div className='space-y-4'>
                <h2 className='text-white'>Find Us</h2>
                <p className='text-white'>We are always responsible.</p>
                <p className='text-white'>Round Square, At ToysLand,  Gulshan-1212</p>
                <div className='flex gap-2'>
                    <Link><FaInstagram className='h-8 w-8 text-red-500'></FaInstagram> </Link>
                    <Link><FaLinkedin className='h-8 w-8 text-blue-400'></FaLinkedin> </Link>
                    <Link><FaFacebook className='h-8 w-8 text-blue-500'></FaFacebook> </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;