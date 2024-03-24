import '../Register/Register.css';
import Header from '../../Components/Header/Header.js';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router';
import Cookie from 'js-cookie';
import { cookieReceive } from '../../Utils/Utils.js';
import {remote} from '../../Utils/Utils.js';
import destination from '../../Assets/destination.jpg';
import Footer from '../../Components/Footer/Footer.js';

function Login()
{
    const [email,SetEmail] =useState('');
    const [password,SetPassword] =useState('');
    
    const [error,setError] =useState("");

    const navigate=useNavigate();
    
    const [checkLogout,setLogout]=useState('');

    useEffect(()=>{
     
    },[]);

    const submitData=()=>{
      if(email===null || email==="")
        {
        setError("Email can't be null");
          return;
        }
        if(password===null || password==="")
        {
        setError("Password can't be null");
          return;
        }
        const loginData={
            "email":email,
            "password":password
        };
        axios.post(`${remote}/login`,{email:email,password:password},{headers:{'Content-Type':'application/json'},withCredentials:true})
        .then(res=>
         {
          if(res.data.err)
          {
            setError(res.data.err);
            localStorage.setItem("login","false")
            return;
          }
          else
          {
             alert(res.data.msg);
            localStorage.setItem("login","true")
             navigate('/',{state:{data:"Logout"}});
          }
         })
        .catch(e=>console.log(`Error found! ${e}`));
        loginCheckForCookies();
    }
    const loginCheckForCookies=()=>{
         cookieReceive().then(data=>{
              if(data)
                setLogout("Logout");
              else
                setLogout("Register");
         })
         .catch(err=>{console.log("Not recieved",err); setLogout("Register");});
    }

    return <div>
       <Header registerButton={checkLogout} background={destination}/>
         <div className='registerformcontainer'>
           <h1 className='wallheading'>Login First !</h1>
           <div className='registerform'>
             <div className='option'>
             <label>Email:</label>
                <input type='email' onChange={(e)=>SetEmail(e.target.value)}/>
             </div>
             <div className='option'>
             <label>Password:</label>
                <input type='password' onChange={(e)=>SetPassword(e.target.value)}/>
             </div>
             <div className='option'>
                <button type='submit' onClick={()=>submitData()}>Login</button>
             </div>
           </div>
         </div>
         <Footer/>
        </div>
}

export default Login;