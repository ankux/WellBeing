import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import BookSession from './components/BookSession/BookSession';
import Experts from './components/Experts/Experts';
import { checkAuth } from './CheckAuth';
import Logout from './components/Logout/Logout';
import Dashboard from './components/Dashboard/Dashboard';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={checkAuth() ? <Navigate to="/" replace /> : <Login />} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/register' element={checkAuth() ? <Navigate to="/" replace /> : <Register />} />
      <Route path='/experts' element={<Experts/>} />
      <Route path='/dashboard' element={checkAuth() ? <Dashboard /> : <Navigate to="/login" replace />} />
      <Route path='/booksession/:id' element={checkAuth() ? <BookSession /> : <Navigate to="/login" replace />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

