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
    
    
 
    
  let {userId} = useParams();
  console.log(userId);
  
  const handleclick = () => {
 
    axios.get(`http://localhost:8080/api/showuser/${userId}`)
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
      <form onSubmit={handleclick} method='POST' className='updateuser'>
        
        <h3>Update User</h3>
        <label >Username</label>
        <input type='password' id='passowrd'  onChange={e=> setValues({...values, password:e.target.value})} />
        <label >Email</label>
        <input type='text' id="email"  onChange={e=> setValues({...values, email:e.target.value})}  />
        <label >Password</label>
        <input type='password' id='passowrd' onChange={e => setValues({ ...values, password: e.target.value })} />
        <label> Select Role </label>
        <select>
        <option value="admin" onChange={e=> setValues({...values, admin:e.target.value})}>Admin</option>
        <option value="manager" onChange={e=> setValues({...values, manager:e.target.value})}>Manager</option>
        <option value="agent" onChange={e=> setValues({...values, agent:e.target.value})}>Agent</option>
        </select>
        
        <button class="login-btn">Update</button>
        <div className='danger-text'>{err}</div>
      </form>
      
    </div>
   
  );
}

export default EditUser;
