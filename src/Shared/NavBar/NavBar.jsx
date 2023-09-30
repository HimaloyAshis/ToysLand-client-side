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
                <Link className='butn'>Home</Link>
                <Link to={'/blog'} className='butn'>Blog</Link>
                <Link to={'/allToys'} className='butn'>All toys</Link>
                {user ? <>
                    <Link to={'/myToys'} className='butn'>My toys</Link>
                    <Link to={'/addToys'} className='butn'>Add toys</Link>
                    <button onClick={handleLogOut} className='butn'>LogOut</button>
                    <img className='rounded-full h-8' src={user?.photoURL} title={user?.displayName} alt="" />
                </>
                    : <Link to={'/login'} className='butn'>Login</Link>}
            </div>
        </div>
    );
};

export default NavBar;