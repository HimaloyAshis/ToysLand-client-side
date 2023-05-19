import React from 'react';
import { FaBeer, FaStar } from 'react-icons/fa';
import './Navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg p-5 lg:flex justify-between items-center text-white'>
            <div className='flex gap-4'>
                <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IMm90lBVuwXW4YXgYc8yM3n6HgrblB5Ffw&usqp=CAU" alt="" />
                <p className='text-2xl font-bold inline-flex items-center'>T<FaStar className='text-orange-500'></FaStar> ysLand</p>
            </div>
            <div className='lg:flex gap-3'>
                <Link className='btn'>Home</Link>
                <Link className='btn'>All toys</Link>
                <Link className='btn'>My toys</Link>
                <Link to={'/addToys'} className='btn'>Add toys</Link>
                <Link className='btn'>Blog</Link>
                <Link to={'/login'} className='btn'>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;