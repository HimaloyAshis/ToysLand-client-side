import React, { useContext, useEffect, useState } from 'react';
import './SignUp.css'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const location = useLocation()


    useEffect(() => {
        const routeName = location.pathname
        document.title = `ToysLand - ${routeName}`;
    }, [location.pathname]);

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const url = form.photo.value
        console.log(email, password, name, url)

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                updateUser(name, url)
                    .then(() => { })
                    .catch(error => setError(error.message))
                console.log(loggedUser)
                setError('')
                form.reset()
            })
            .catch(error => setError(error.message))

    }

    return (
        <div className="hero min-h-screen log ">
            <Helmet>
                <title>ToysLand | SignUp page</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body login rounded ">
                        <h1 className="text-5xl font-bold text-white">Sign Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-white">Photo</span>
                                </label>
                                <input type="URL" name='photo' required placeholder="URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-white'>Already have an account ? please <Link to={'/login'} className='text-orange-500'>SignIn</Link> </p>
                        <p className='text-orange-500 text-2xl py-2'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;