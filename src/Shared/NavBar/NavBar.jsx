import React, { useContext } from 'react';
import { FaBeer, FaStar } from 'react-icons/fa';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, LogOut } = useContext(AuthContext)
    console.log(user)


    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast('LogOut successfully')
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className='bg p-5 lg:flex justify-between items-center text-white'>
            <div className='flex gap-4'>
                <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IMm90lBVuwXW4YXgYc8yM3n6HgrblB5Ffw&usqp=CAU" alt="" />
                <p className='text-2xl font-bold inline-flex items-center'>T<FaStar className='text-orange-500'></FaStar> ysLand</p>
            </div>
            <div className='lg:flex gap-3'>
                <ToastContainer></ToastContainer>
                <Link className='btn'>Home</Link>
                <Link to={'/blog'} className='btn'>Blog</Link>
                <Link to={'/allToys'} className='btn'>All toys</Link>
                {user ? <>
                    <Link to={'/myToys'} className='btn'>My toys</Link>
                    <Link to={'/addToys'} className='btn'>Add toys</Link>
                    <img className='rounded-full h-8' src={user?.photoURL} title={user?.displayName} alt="" />
                    <button onClick={handleLogOut} className=''>LogOut</button>
                </>
                    : <Link to={'/login'} className='btn'>Login</Link>}
            </div>
        </div>
    );
};

export default NavBar;