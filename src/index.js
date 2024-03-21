import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Pages/Register/Register.js';
import Login from './Pages/Login/Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tours from './Pages/Tours/Tours.js';
import img1 from './Assets/tour1-1.jpg';
import img2 from './Assets/tour1-2.jpg';
import MeetMe from './Pages/MeetMe/MeetMe.js';
import PostPage from './Pages/PostPage/PostPage.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path='/' element={<App/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Tour1' element={<Tours img1={img1} img2={img2}/>}/>
         <Route path='/Tour2' element={<Tours img1={img1} img2={img2}/>}/>
         <Route path='/Tour3' element={<Tours img1={img1} img2={img2}/>}/>
         <Route path='/MeetMe' element={<MeetMe/>}/>
         <Route path='/PostPage' element={<PostPage/>}/>
         </Routes>
    </Router>
  </React.StrictMode>
);


