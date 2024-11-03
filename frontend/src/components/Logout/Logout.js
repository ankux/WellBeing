import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();

    useEffect(()=>{     
        const handleLogout = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            window.location.reload();
            navigate('/login');
        };

        handleLogout();
    })

  return (
    <>
    </>
  )
}

export default Logout