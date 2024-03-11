import Header from '../../Components/Header/Header.js';
import img1 from '../../Assets/1.png';
import img2 from '../../Assets/2.png';
import img3 from '../../Assets/3.png';

import './Home.css';

import React, { useEffect, useState } from 'react';
import LeafWithText from '../../Components/LeafWithText/LeafWithText.js';
import ThreeImageGallery from '../../Components/ThreeImageGallery/ThreeImageGallery.js';
import Footer from '../../Components/Footer/Footer.js';
import { useLocation } from 'react-router';

function Home()
{
    const [state,setState]=useState('');
    const location=useLocation();

    useEffect(() => {
        setState(localStorage.getItem('cookie') === null ? 'Register' : 'Logout');
        console.log("location.state.data",location.state)
    }, [location.state]);

    return (
        <div>
            <Header registerButton={state}/>
                <h1 className='wallheading'>Hi, I' m Shafi</h1>
            <h2 className='wallsubheading'>A normal boy living her biggest, messiest dreams.</h2>
            <button className='gettoknow'>
                Excited to Know Me
            </button>
            <div className='LeafContainer'>
                <LeafWithText text="My recent adventures"/>
                <ThreeImageGallery image1={img1} image2={img2} image3={img3} link1={"/Tour1"} link2={"/Tour2"} link3={"/Tour3"}/> 
                <LeafWithText text="My favorite stories"/>
                <ThreeImageGallery image1={img1} image2={img2} image3={img3} link1="/Tour1" link2="/Tour2" link3="/Tour3"/> 
                <LeafWithText text="My Travel Countries stories"/>
                <ThreeImageGallery image1={img1} image2={img2} image3={img3} link1="/Tour1" link2="/Tour2" link3="/Tour3"/> 
            </div>
            <Footer/>
        </div>
    );
}

export default Home;