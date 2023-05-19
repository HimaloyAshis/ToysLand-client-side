import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footBGC p-10 text-white'>
            <div>
                <p>Subscribe Us</p>
                <br />
                <input type="email" className='h-10 p-2 rounded text-black' name="email" id="" />
                <button className='btn ml-2'>Sign in</button>
            </div>
            <div>
                <h2>Service Items</h2>
                <Link>Toys</Link>
                <Link>All Product</Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Footer;