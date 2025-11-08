import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const [nameError, setNameError] = useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more then 5 character");
            return;
        } else {
            setNameError("")
        }
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photoUrl, email, password });
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode);
            })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" required />
                            {nameError && <p className='text-red-400 text-xs'>{nameError}</p>}
                            <label className="label">Ptoto URL</label>
                            <input name='photo' type="text" className="input" placeholder="Ptoto URL" required />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required />
                            <button type='submit ' className="btn btn-neutral mt-4">Register</button>
                            <p className='py-3'>If you are allready  register,Please  <Link to="/auth/login"><span className='text-blue-400'>Login</span></Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;