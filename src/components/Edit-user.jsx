import React, {useState, useEffect } from 'react';
import "../style/dashboard.css";
import axios from "axios";
import { useParams } from 'react-router-dom';

function EditUser() {
 const{userId,username,email,password,role} = useParams();

  const [values, setValues] = useState({
    email: email || "",
    password: password || "",
    role: role || "",
    username:username || ""
  })
  const [err, seterr] = useState(null)
    
  
  const handleclick = (e) => {
    e.preventDefault();
 
    axios.put(`http://localhost:8080/api/showuser/${userId}/${username}/${email}/${password}/${role}`, values)
      .then((res) => {
       console.log(res)
        if ((res.statusText === "OK")) {
          seterr(res.data.message)
        } else {
          seterr("Soory,User is not updated there is some issue")
        }
      })
      .catch((err) => {
        seterr("Got Error In catch: " + err.message)
      })
  }

  useEffect(() => {
    setValues({
      email: email || '',
      password: password || '',
      role: role || '',
      username: username || ''
    });
  }, [userId, username, email, password, role]);
  
  return (
    <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleclick} method='GET' className='updateuser'>
        
        <h3>Update User</h3>
        <label >Username</label>
        <input type='text' id='username' value={values.username}   onChange={e=> setValues({...values, username:e.target.value})} />
        <label >Email</label>
        <input type='text' id="email" value={values.email}  onChange={e=> setValues({...values, email:e.target.value})}  />
        <label >Password</label>
        <input type='password' id='password' value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
        <label> Select Role </label>
        <select value={values.role} onChange={e=> setValues({...values, role:e.target.value})}>
        <option value="Admin" >Admin</option>
        <option value="Manager">Manager</option>
        <option value="Agent">Agent</option>
        </select>
        
        <button class="login-btn">Update</button>
        <div className='danger-text'>{err}</div>
      </form>
      
    </div>
   
  );
}

export default EditUser;
