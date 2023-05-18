import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg p-5 lg:flex justify-between text-white'>
            <div className='flex'>
                <img className='' src="" alt="" />
                <p className='text-2xl font-bold'>Toys Land</p>
            </div>
            <div className='lg:flex gap-3'>
                <Link>Home</Link>
                <Link>All toys</Link>
                <Link>My toys</Link>
                <Link>Add toys</Link>
                <Link>Blog</Link>
            </div>
        </div>
    );
};

export default NavBar;