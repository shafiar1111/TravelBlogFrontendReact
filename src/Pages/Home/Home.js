import Header from '../../Components/Header/Header.js';
import img1 from '../../Assets/1.png';
import img2 from '../../Assets/2.png';
import img3 from '../../Assets/3.png';
import frontscreen from '../../Assets/front.jpg';

import './Home.css';

import React, { useEffect, useState } from 'react';
import LeafWithText from '../../Components/LeafWithText/LeafWithText.js';
import ThreeImageGallery from '../../Components/ThreeImageGallery/ThreeImageGallery.js';
import Footer from '../../Components/Footer/Footer.js';
import { useLocation } from 'react-router';
import { FetchImage } from '../../Utils/Utils.js';

function Home()
{
    const [state,setState]=useState('');
    const [image,setImage]=useState([]);
    const location=useLocation();

    // useEffect(()=>console.log(image[0]),[image]);


     useEffect(()=>{
        FetchImage()
        .then(res=>{
            setImage(res);
        })
        .catch(err=>{
            throw err;
        });
     },[]);
    return (
        <div>
            <Header background={frontscreen}/>
                <h1 className='wallheading'>Hi, I' m Shafi</h1>
            <h2 className='wallsubheading'>A normal boy living her biggest, messiest dreams.</h2>
            <button className='gettoknow'>
                Excited to Know Me
            </button>
            <div className='LeafContainer' style={{marginTop:"-300px"}}>
                <LeafWithText text="My recent adventures"/>
                <ThreeImageGallery image1={img1} image2={img2} image3={img3} link1={"/Tour1"} link2={"/Tour2"} link3={"/Tour3"}/> 
                <LeafWithText text="My favorite stories"/>
                <ThreeImageGallery image1={img1} image2={img2} image3={img3} link1="/Tour1" link2="/Tour2" link3="/Tour3"/> 
                <LeafWithText text="My Travel Countries stories"/>
                <ThreeImageGallery image1={img1} image2={img2} image3={img3} link1="/Tour1" link2="/Tour2" link3="/Tour3"/> 
             
                {image.map((item, index) => {
                    return (
                            <React.Fragment>   
                                <LeafWithText text="Additionals"/>
                            <ThreeImageGallery
                                image1={`data:image/png;base64,${item?.imageFile}`}
                                image2={`data:image/png;base64,${item?.imageFile}`}
                                image3={`data:image/png;base64,${item?.imageFile}`}
                                link1="/Tour1"
                                link2="/Tour2"
                                link3="/Tour3"
                            />
                            </React.Fragment>

                    );
                })}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;