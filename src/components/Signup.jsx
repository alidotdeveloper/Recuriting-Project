import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate();
  const [err,setError] = useState('')
  const [values, setValues] = useState({
    email: '',
    password: '',
    role:'',
    username:'',
  })


  const handlesignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/signup', values)
      .then(res => {
        setError(null);
        console.log(res.data.message);
        if (res.data.status === "ok") {
          setError(res.data.message);
          navigate('/', { replace: true })
        } else {
          setError(res.data.message)
        }

      }).catch(err => console.log(err));
    
      
  }
  useEffect(() => {
    if (err === null) {
      // No error, navigate
      navigate('/', { replace: true });
    }
  }, [err, navigate]);
  

  return (
    <>
      <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handlesignup} method='POST' className='signup-form'>
        
        <h3>Signup Here</h3>
  
        
        <label >Email</label>
        <input type='email' id="email"   onChange={e=> setValues({...values, email:e.target.value})}  />
        <label >Password</label>
        <input type='password' id='passowrd'   onChange={e=> setValues({...values, password:e.target.value})} />
        <label >Username</label>
          <input type='text' id="username" onChange={e => setValues({ ...values, username: e.target.value })} />
          <label> Select Role </label>
        <select value={values.role} onChange={e=> setValues({...values, role:e.target.value})}>
        <option value="Admin" >Admin</option>
        <option value="Manager">Manager</option>
        <option value="Agent">Agent</option>
        </select>
          <button className='signup-btn'>Signup</button>
          
          <div className='danger-text'>{ err}</div>
      </form>
      
    </div>
    </>
  )
}

export default Signup