import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import './Tours.css';
import React from 'react';
import frontscreen from '../../Assets/front.jpg';

function Tours({img1,img2})
{
   return (
   <div className='TourContainer'>
     <Header background={frontscreen}/>
       <div className='TourSubContainer'>
        <h4>
            I never thought I’d say this, but I found a bird I hate. 

It was a moody, beautiful day when we landed on Grímsey on our Iceland Circumnavigation expedition trip. A little island 40 kilometers north of Iceland, the only part of Iceland that sits within the Arctic Circle at 66° North. The rest of Iceland sits just below the Arctic Circle. 

This is probably the main draw card for those visiting Grímsey, but I’m just here for nature and the birds.

I also love visiting off-the-beaten-path locations, and in a country as popular as Iceland, those can be hard to find. Rest assured, Grímsey is still pretty far off the grid. The great part about exploring Iceland by sea with Adventure Canada is that we can rock up almost anywhere, disembark with zodiacs, and explore on the water anytime. That’s infinitely harder to do if you’re traveling independently. 
        </h4>
          <img src={img1}/>
          <img src={img2}/>
       </div>
     <Footer/>
   </div>
   )
}

export default Tours;