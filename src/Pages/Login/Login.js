import '../Register/Register.css';
import Header from '../../Components/Header/Header.js';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Login()
{
    const [name,setName] =useState('');
    const [email,SetEmail] =useState('');
    const [password,SetPassword] =useState('');
    const [confirmPassword,SetConfirmPassword] =useState('');
    
    useEffect(()=>{
        console.log('name',name);
    },[name]);

    const submitData=()=>{
        const registerData={
            "name":name,
            "email":email,
            "password":password
        };
        axios.post("http://localhost:3001/login",registerData,{headers:'Content-Type="application/json"'})
        .then(e=>console.log("Data posted!",e))
        .catch(e=>console.log(`Error found! ${e}`));
    }

    return <div>
       <Header/>
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
        </div>
}

export default Login;