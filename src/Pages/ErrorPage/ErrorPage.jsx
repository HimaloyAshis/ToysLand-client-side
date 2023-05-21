import React from 'react';
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error, status } = useRouteError()


    return (
        <div className='errorBgc p-40'>
            <div className='flex flex-col justify-center space-y-6  items-center'>
                <img className='h-72' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684640722~exp=1684641322~hmac=03476af54adf097876a53401379f51426986bfbe397ad816737e67192171e396" alt="" />

                <div className='text-center'>
                    <p className='text-2xl '>{error?.message}</p>
                    <p className='text-2xl '>{status && status}</p>
                    <p className='text-2xl '>Provide a valid url</p>
                    <Link className='text-2xl text-purple-600' to={'/'}>Back to home page</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;