import React, { useState } from 'react';
import "../style/login.css";
import axios from "axios";


function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [err, setError] = useState({message:''});


  const handleLogin = async (e) => {
    
    e.preventDefault();

    axios.post('http://localhost:8080/api/login', values)
     .then(res => {
         if (res.data.status === "success") {
           console.log("login successful")
         } else{
          console.log(res.data);
           setError({message: res.data.err });
       }
       
     }).catch(res => {console.log(err) })
    
    };
  

  return (
    <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin} method='POST'>
        
        <h3>Login Here</h3>
        <div className='danger-text'>{err.message}</div>
        <label>Email</label>
        <input type='text'  onChange={e=> setValues({...values, email:e.target.value})}  />
        <label>Password</label>
        <input type='password'  onChange={e=> setValues({...values, password:e.target.value})} />
        <button>Login</button>
      </form>
     
    </div>
    
  )
}
        
export default Login