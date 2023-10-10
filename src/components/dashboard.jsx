// eslint-disable-next-line

import React, { useEffect, useState } from 'react';
import "../style/dashboard.css";
import axios from "axios";



function App() {

  const [Users, setUser] = useState([])
  const [err, seterr] = useState(null)


  useEffect(() => {
    axios.get('http://localhost:8080/api/showuser')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setUser(res.data)
        } else {
          seterr("Response data is not in array")
        }
      })
      .catch((err) => {
        seterr("Got Error In catch: " + err.message)
      }, [])

  })
  
  const handledelete = (userid) => {

    
    
    alert("did you want to delete that record?");

      axios.delete('http://localhost:8080/api/showuser/' + userid)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setUser(res.data)
            
          } else {
            seterr("Response data is not in array")
          }
        }).catch((err) => {
          seterr("Got Error In catch: " + err.message)
        }, [])

    
  }
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
        <h4 className="h4-heading">User lists</h4>
        <a href="/signup" className='global-btn'>Add New User</a>
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
            {err ? (
              <tr>
                <td colSpan="5">{err}</td>
              </tr>
            ) : Users.length > 0 ? (
              Users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <a href={`/dashboard/Edit-user/${user.id}/${user.username}/${user.email}/${user.password}/${user.role}`}  className='global-btn'>edit</a>
                    <a onClick={e => handledelete(user.id)}  className='global-btn'>delete</a>
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


// jwt token which we implement login
// condition to check token is valid or not
// create a custom api to verify we will put custom function of verify api in that 
// if it's work it will give the message success