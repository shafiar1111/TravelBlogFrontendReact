import './ThreeImageGallery.css';
import React from 'react';

function ThreeImageGallery({image1,image2,image3})
{
    return (
        <div className='recentimagehome'>
            <div className='imagecontainer'>
            <img src={image1} width='300' height='280' className='im'/>
            <div className='overlay'> </div>
            </div>
            <div className='imagecontainer'>
            <img src={image2} width='300' height='280' className='im'/>
            <div className='overlay'> </div>
            </div>
            <div className='imagecontainer'>
            <img src={image3} width='300' height='280' className='im'/>
            <div className='overlay'> </div>
            </div>
        </div>
    )
}
export default ThreeImageGallery;