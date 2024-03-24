import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Destination.css';
import destination from '../../Assets/destination.jpg';
import img1 from '../../Assets/des1.png';
import img2 from '../../Assets/des2.png';
import img3 from '../../Assets/des3.png';
import img4 from '../../Assets/1.png';
import img5 from '../../Assets/2.png';
import img6 from '../../Assets/3.png';
import ThreeImageGallery from '../../Components/ThreeImageGallery/ThreeImageGallery';
import LeafWithText from '../../Components/LeafWithText/LeafWithText';

function Destination()
{
    return (
        <div className="DestinationContainer">
           <Header background={destination}/>
           <div className='LeafContainer'>
                <ThreeImageGallery image1={img1} image2={img5} image3={img6} link1={"/Tour1"} link2={"/Tour2"} link3={"/Tour3"}/> 
                <ThreeImageGallery image1={img4} image2={img2} image3={img3} link1="/Tour1" link2="/Tour2" link3="/Tour3"/> 
                <ThreeImageGallery image1={img5} image2={img6} image3={img4} link1="/Tour1" link2="/Tour2" link3="/Tour3"/> 
             </div>
           <Footer/>
        </div>
    )
}
export default Destination;