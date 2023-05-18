import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg p-5 lg:flex justify-between text-white'>
            <div className='flex'>
                <img className='h-32' src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
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