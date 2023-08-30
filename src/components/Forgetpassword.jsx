import axios from 'axios';
import React, { useState } from 'react';


function Forgetpassword() {
    const [values, setValues] = useState({
        email: '',
      })

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/forgetpassword', values)
            .then(res => {
                
                if (res.data.status === "ok") {
                    console.log(res.data.message)
                return res.json(200)
                }
                else {
                    console.log("email not send")
                }
                
            }).catch(err=>console.log(err))
    

    }
    return(
    <div className="main">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
            <form onSubmit={handleSubmit } method='POST' className='forget-form'>
            <h3>Forget password</h3>
            <label >Email</label>
            <input type='text' id="email" onChange={e=> setValues({...values, email:e.target.value})}/>
            <button class="login-btn">Send</button>
            <div className='danger-text'></div>
        </form>
    
    </div>
  
)
}

export default Forgetpassword