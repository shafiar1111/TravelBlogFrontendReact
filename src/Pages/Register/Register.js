import './Register.css';
import Header from '../../Components/Header/Header.js';

function Register()
{
    return <div>
       <Header/>
         <div className='registerformcontainer'>
           <h1 className='wallheading'>Register Yourself !</h1>
           <div className='registerform'>
             <div className='option'>
                <label>Name:</label>
                <input type='text'/>
             </div>
             <div className='option'>
             <label>Email:</label>
                <input type='text'/>
             </div>
             <div className='option'>
             <label>Password:</label>
                <input type='text'/>
             </div>
             <div className='option'>
             <label>Confirm Password:</label>
                <input type='text'/>
             </div>
             <div className='option'>
                <button type='submit'>Register</button>
             </div>
           </div>
         </div>
        </div>
}

export default Register;