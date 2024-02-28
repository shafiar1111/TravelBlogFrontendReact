import Header from '../Components/Header/Header.js';
import leaf from '../Assets/leaf.png';
import img1 from '../Assets/1.png';
import img2 from '../Assets/2.png';
import img3 from '../Assets/3.png';

import './Home.css';

import LeafWithText from '../Components/LeafWithText/LeafWithText.js';

function Home()
{
    return (
        <div>
            <Header></Header>
            <LeafWithText></LeafWithText>
            <div className='recentimagehome'>
                <div className='imagecontainer'>
                <img src={img1} width='300' height='280' className='im'/>
                <div className='overlay'> </div>
                </div>
                <div className='imagecontainer'>
                <img src={img2} width='300' height='280' className='im'/>
                <div className='overlay'> </div>
                </div>
                <div className='imagecontainer'>
                <img src={img3} width='300' height='280' className='im'/>
                <div className='overlay'> </div>
                </div>
                </div>
        </div>
    );
}

export default Home;