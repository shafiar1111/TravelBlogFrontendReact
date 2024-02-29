import Header from '../../Components/Header/Header.js';
import img1 from '../../Assets/1.png';
import img2 from '../../Assets/2.png';
import img3 from '../../Assets/3.png';

import './Home.css';

import React from 'react';
import LeafWithText from '../../Components/LeafWithText/LeafWithText.js';
import ThreeImageGallery from '../../Components/ThreeImageGallery/ThreeImageGallery.js';
import Footer from '../../Components/Footer/Footer.js';

function Home()
{
    return (
        <div>
            <Header/>
            <LeafWithText text="My recent adventures"/>
            <ThreeImageGallery image1={img1} image2={img2} image3={img3} /> 
            <LeafWithText text="My favorite stories"/>
            <ThreeImageGallery image1={img1} image2={img2} image3={img3} /> 
            <Footer/>
        </div>
    );
}

export default Home;