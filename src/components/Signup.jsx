import React from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
          <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit="" method='POST' className='signup-form'>
        
        <h3>Signup Here</h3>
  
        <label >Username</label>
          <input type='text' id="username" />
          <label >Email</label>
        <input type='text' id="email"    />
        <label >Password</label>
        <input type='password' id='passowrd'  />
        <button>Signup</button>
        <div className='danger-text'></div>
      </form>
      
    </div>
    </>
  )
}

export default Signup