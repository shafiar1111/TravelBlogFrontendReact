import './Register.css';
import Header from '../../Components/Header/Header.js';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Register()
{
    const [name,setName] =useState('');
    const [email,SetEmail] =useState('');
    const [password,SetPassword] =useState('');
    const [confirmPassword,SetConfirmPassword] =useState('');
    
    const [error,setError]=useState('');

    useEffect(()=>{
        console.log('name',name);
    },[name]);

    const submitData=()=>{
        if(name===null || name==="")
          {
            setError("Name can't be null");
            return;
          }
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
          if(confirmPassword===null || confirmPassword==="")
          {
            setError("Password can't be null");
            return;
          }
          if(confirmPassword!==password)
          {
            setError("Password not match!");
            return;
          }
        const registerData={
            "name":name,
            "email":email,
            "password":password
        };
        axios.post("http://localhost:3001/register",registerData,{headers:{'Content-Type':'application/json'},withCredentials:true})
        .then(res=>{
         if(res.data.err){
           setError(res.data.err)
         }
         else
         {
             alert(res.data.msg);
         }
      })
        .catch(e=>console.log(`Error found! ${e}`));
    }

    return <div>
       <Header/>
         <div className='registerformcontainer'>
           <h1 className='wallheading'>Register Yourself !</h1>
           <div className='registerform'>
             <div className='option'>
                <label>Name:</label>
                <input type='text' onChange={(e)=>setName(e.target.value)}/>
             </div>
             <div className='option'>
             <label>Email:</label>
                <input type='email' onChange={(e)=>SetEmail(e.target.value)}/>
             </div>
             <div className='option'>
             <label>Password:</label>
                <input type='password' onChange={(e)=>SetPassword(e.target.value)}/>
             </div>
             <div className='option'>
             <label>Confirm Password:</label>
                <input type='text' onChange={(e)=>SetConfirmPassword(e.target.value)}/>
             </div>
             <h5 style={{color:"red"}}>{error}</h5>
             <div className='option'>
                <button type='submit' onClick={()=>submitData()}>Register</button>
                <button type='submit' onClick={()=>window.location.href="/Login"}>Login</button>
             </div>
           </div>
         </div>
        </div>
}

export default Register;