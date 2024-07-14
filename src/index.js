import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

