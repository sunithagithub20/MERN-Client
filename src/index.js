import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Register from './components/register';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Home from './components/home';
const root=ReactDOM.createRoot(document.getElementById('root'))

//virtual Root( V DOM)
root.render(
  
  <div>
    <Router>
      <h1>Welcome</h1>
      <Navbar/>
      <Home/>
   
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>

      </Routes>
    </Router>
  
  </div>
  
 )
