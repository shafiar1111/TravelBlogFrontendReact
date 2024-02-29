import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Pages/Register/Register.js';
import Login from './Pages/Login/Login.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path='/' element={<App/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Login' element={<Login/>}/>

         </Routes>
    </Router>
  </React.StrictMode>
);


