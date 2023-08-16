import React, { useState } from 'react';
import "../style/login.css";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: email,
        password: password,
      });
      console.log(response.data.message);

    } catch (err) {
     
      console.log("user not found:" , err.response.data);
    
    }
  }
  return (
    <div className="main">
         <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
      <form onSubmit={handleLogin} method='POST'>
        <h3>Login Here</h3>
          <label>Email</label>
          <input type='text' value={email} onChange={((e)=>{setEmail(e.target.value)})}></input>
          <div className=""></div>
          <label>Password</label>
        <input type='password' value={password} onChange={((e)=>{setPassword(e.target.value)})}></input>
          <button>Login</button>
        </form>
      </div>
    
  )
}

export default Login