import React, { useEffect, useState } from 'react';
import "../style/dashboard.css";
import axios from "axios";

function App () {

  const [Users, setUser] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/showuser')
      .then((res) => {
        setUser(res)
        
      })
      .catch((err) =>{
      setUser("you got error in catch:" + err)
    }, [])



  })
  return (
    <div>
      
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">BBBootstrap</span>
            </a>
            <div className="nav_list">
              <a href="/" className="nav_link active">
                <i className="bx bxs-group nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              
            </div>
            <div className="nav_list">
              <a href="/" className="nav_link">
                <i className="bx bxs-user-plus nav_icon"></i>
                <span className="nav_name">Add User</span>
              </a>
             
            </div>
          </div>
          <a href="/" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
      <div className="height-100 bg-black">
        <h4>User lists</h4>
        <table class="table-auto">
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Action</th>
      
      
    </tr>
  </thead>
  <tbody>
  {Users.length > 0 ? (
  Users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <a href="/" className='global-btn'>edit</a>
        <a href="/" className='global-btn'>delete</a>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5">No users available</td>
  </tr>
)}







</tbody>
</table>

      </div>
    </div>
  );
}

export default App;
