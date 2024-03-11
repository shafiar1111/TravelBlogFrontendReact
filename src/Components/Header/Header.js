import frontscreen from '../../Assets/front.jpg';
import './Header.css';
import logo from '../../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { cookieRemove } from '../../Utils/Utils';
import { useState } from 'react';

function Header({registerButton="Register"})
{
    const location=useLocation();
    const[state,setState]=useState(false);

    const logOut=()=>{
        cookieRemove().then(data=>{
            if(data)
            {
                location.state=null;
                registerButton="Register"
            }
            else
            {
                registerButton="Logout"

            }
        })
    }

    return (
        <div className='headercontainer'>
        <img src={frontscreen} alt='front' height='100%' width='100%' className='img'/>
        <div className='navigation'>
            <nav>
                <h3><Link to="/" className='register'>Home</Link></h3>
                <h3>Meet Me</h3>
                <h3>The blog</h3>
                <h3>Destinations</h3>
                <h3>Moving Abroad</h3>
            </nav>
            <img src={logo} width='100' height='100px' className='logo'/>
            <nav>
                <h3>New Zealand</h3>
                <h3>Spain</h3>
                <h3>Bloggin</h3>
                <h3 onClick={()=>{if(registerButton==='Logout'){logOut()}}}>
                    <Link to="/register" className='register'>{registerButton}
                    </Link></h3>
            </nav>
        </div>
        </div>
    );
}

export default Header;
