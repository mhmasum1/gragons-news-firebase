import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="Name" className="input" placeholder="Name" />
                            <label className="label">Ptoto URL</label>
                            <input type="text" className="input" placeholder="Ptoto URL" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='py-3'>If you are allready  register,Please  <Link to="/auth/login"><span className='text-blue-400'>Login</span></Link></p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;