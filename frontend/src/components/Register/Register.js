import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/register',{
          method:'POST',
          body:JSON.stringify(form),
          headers:{
            'Content-Type':'application/json'
          }
        })
        const data = await response.json();
        console.log(data);
        navigate('/login');
      }

  return (
    <div className='font-poppins p-4 md:p-8'>
    <hr className="border-t border-2 border-gray-100 my-8" />
    <div className='mt-4'>
    <div className='md:flex'>
            <div className='md:w-1/2 flex justify-center items-center max-sm:hidden'>
                <img src="assets/login/login.svg" alt="" srcset="" className='md:w-[50%] object-cover pointer-events-none'/>
            </div>
            <div className='md:w-5/12 flex flex-col justify-center p-4 md:px-12 text-justify m-1 rounded-md'>
                <h1 className='font-bold text-4xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-gradient mb-6 inline-flex items-center gap-2'> Register </h1>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                    <input onChange={handleForm} type="text" name="name" placeholder='Full Name' className='border-2 p-3 rounded-md' />
                    <input onChange={handleForm} type="email" name="email" placeholder='Email' className='border-2 p-3 rounded-md'/>
                    <input onChange={handleForm} type="password" name="password" placeholder='Password' className='border-2 p-3 rounded-md'/>
                    <button type='submit' className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 text-white px-3 py-3 md:px-6 md:py-3 rounded-md inline-flex items-center justify-center gap-1'>Register</button>
                </form>  
                <Link to="/login">
                    <h2 className='mt-2 text-gray-600'>Have an account? Login here</h2>
                </Link>

            </div>
        </div>
    </div>
    <hr className="border-t border-2 border-gray-100 my-8" />
</div>
  )
}

export default Register