import React, { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userID', data.client_id);
            localStorage.setItem('userName', data.name);
            localStorage.setItem('userEmail', data.email);
            window.location.reload();
            navigate('/');
        } else {
            toast.error(data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className='font-poppins p-4 md:p-8'>
            <ToastContainer />
            <hr className="border-t border-2 border-gray-100 my-8" />
            <div className='mt-4'>
                <div className='md:flex'>
                    <div className='md:w-1/2 flex justify-center items-center max-sm:hidden'>
                        <img src="assets/login/login.svg" alt="" className='md:w-[50%] object-cover pointer-events-none'/>
                    </div>
                    <div className='md:w-5/12 flex flex-col justify-center p-4 md:px-12 text-justify m-1 rounded-md'>
                        <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-6 inline-flex items-center gap-2'> Login </h1>
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                            <input onChange={handleForm} name="email" type="email" placeholder='Email' className='border-2 p-3 rounded-md'/>
                            <input onChange={handleForm} name="password" type="password" placeholder='Password' className='border-2 p-3 rounded-md'/>
                            <button type='submit' className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 text-white px-3 py-3 md:px-6 md:py-3 rounded-md inline-flex items-center justify-center gap-1'>Login <FiLogIn /> </button>
                        </form>  
                        <Link to="/register">
                            <h2 className='mt-2 text-gray-600'>New user? Register here</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="border-t border-2 border-gray-100 my-8" />
        </div>
    );
}

export default Login;
