import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }


    return (
        <div className="hero min-h-screen log ">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className="text-center lg:text-left w-1/2">

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body login rounded ">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <form onSubmit={handleLogin}>
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
                            <div className="form-control mt-6">
                                <button className="btn text-white">Login</button>
                            </div>
                        </form>
                        <p className='text-white'>Don't have an account ? please <Link to={'/signUp'} className='text-orange-500'>Sign Up</Link> </p>
                        <div className="divider">OR</div>
                        <div className='text-center'>
                            <button  className="btn btn-circle">
                                G
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;