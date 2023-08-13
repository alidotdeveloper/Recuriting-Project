import React from 'react';
import "../style/login.css";

function Login() {
  return (
    <div class="main">
         <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
      <form>
        <h3>Login Here</h3>
          <label>Email</label>
          <input type='text'></input>
          <label>Password</label>
          <input type='text'></input>
          <button>Login</button>
        </form>
      </div>
    
  )
}

export default Login