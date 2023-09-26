import React, {useState } from 'react';
import "../style/dashboard.css";
import axios from "axios";
import { useParams } from 'react-router-dom';

function EditUser() {

  const [values, setValues] = useState({
    email: '',
    password: '',
    role: '',
    username:''
  })
  const [err, seterr] = useState(null)
    
    
 
    
  let {userId,username,email,password,role} = useParams();
  console.log(userId);
  
  const handleclick = () => {
 
    axios.put(`http://localhost:8080/api/showuser/${userId}/${username}/${email}/${password}/${role}`, values)
      .then((res) => {
        if ((res.data.status = "Sucess")) {
          seterr(res.data)
        } else {
          seterr("Response data is not in array")
        }
      })
      .catch((err) => {
        seterr("Got Error In catch: " + err.message)
      })
  }
  
  return (
    <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleclick} method='GET' className='updateuser'>
        
        <h3>Update User</h3>
        <label >Username</label>
        <input type='text' id='passowrd' value={username}  onChange={e=> setValues({...values, password:e.target.value})} />
        <label >Email</label>
        <input type='text' id="email" value={email}  onChange={e=> setValues({...values, email:e.target.value})}  />
        <label >Password</label>
        <input type='password' id='passowrd' value={password} onChange={e => setValues({ ...values, password: e.target.value })} />
        <label> Select Role </label>
        <select>
        <option value="Admin"  onChange={e=> setValues({...values, admin:e.target.value})}>Admin</option>
        <option value="Manager" onChange={e=> setValues({...values, manager:e.target.value})}>Manager</option>
        <option value="Agent" onChange={e=> setValues({...values, agent:e.target.value})}>Agent</option>
        </select>
        
        <button class="login-btn">Update</button>
        <div className='danger-text'>{err}</div>
      </form>
      
    </div>
   
  );
}

export default EditUser;
