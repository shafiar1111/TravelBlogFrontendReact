import frontscreen from '../../Assets/front.jpg';
import './Header.css';
import logo from '../../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { cookieRemove } from '../../Utils/Utils';
import { useEffect, useState } from 'react';

function Header()
{
    const [registerButton,setRegisterButton]=useState('');

    useEffect(()=>{
        if(localStorage.getItem("login")==="true")
        {
            setRegisterButton("Logout")
        }
        else
        {
            setRegisterButton("Register")
        }
        console.log(localStorage.getItem("login"),registerButton);
    },[registerButton]);

    const logOut=()=>{
        if(registerButton==="Register")
        {
            return;
        }
        cookieRemove().then(data=>{
            if(data)
            {
                localStorage.setItem("login","false")
                setRegisterButton("Register")
            }
        })
    }
    return (
        <div className='headercontainer'>
        <img src={frontscreen} alt='front' height='100%' width='100%' className='img'/>
        <div className='navigation'>
            <nav>
                <h3><Link to="/" className='register'>Home</Link></h3>
                <h3 onClick={()=>window.location.href="/MeetMe"}>Meet Me</h3>
                {registerButton=="Register"?"":<h3 onClick={()=>window.location.href="/PostPage"}>Post Blog</h3>}
                <h3>Destinations</h3>
                <h3>Moving Abroad</h3>
            </nav>
            <img src={logo} width='100' height='100px' className='logo'/>
            <nav>
                <h3>New Zealand</h3>
                <h3>Spain</h3>
                <h3>Bloggin</h3>
                <h3 onClick={()=>{logOut()}}>
                    <Link to="/register" className='register'>{registerButton}
                    </Link></h3>
            </nav>
        </div>
        </div>
    );
}

export default Header;
