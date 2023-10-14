import React, { useState } from 'react';
import "../style/login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [err, setError] = useState('');
  


  const handleLogin =  (e) => { 
    e.preventDefault();

    axios.post('http://localhost:8080/api/login', values, {
  withCredentials: true,
})
     .then(res => {
      
       if (res.data.status === "ok") {
           console.log(res)
         setError(res.data.message); 
         axios.defaults.withCredentials = true;
         navigate('/dashboard')
       }if (res.data.error === 'password not match') {
         console.log(res)
        setError(res.data.error);
       }
       
     }).catch(err => console.log(err) )
    
    };
  

  return (
    <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin} method='POST'>
        
        <h3>Login Here</h3>
  
        <label >Email</label>
        <input type='text' id="email"  onChange={e=> setValues({...values, email:e.target.value})}  />
        <label >Password</label>
        <input type='password' id='passowrd'  onChange={e=> setValues({...values, password:e.target.value})} />
        <button className="login-btn">Login</button>
        <div className='danger-text'><a href="/forget-password" >Forget Password?</a></div>
     

        <div className='danger-text'>{err}</div>
      </form>
      
    </div>
    
  )
}
        
export default Login