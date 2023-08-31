import axios from 'axios';
import React, { useState } from 'react';



function Forgetpassword() {
    const [err, setError] = useState('');
    const [values, setValues] = useState({
        email: '',
      })

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/forgetpassword', values)
            .then(res => {
                console.log(res)
               
                    if (res.statusText === "OK") {
                        setError(res.data.message)
                    }
                    if (res.statusText === "NO") {
                  
                        setError(res.data.message)
                    }
                   
                })
    .catch(err=>console.log("you got error in catch : " + err))
    

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
            <div className='danger-text'>{err}</div>
        </form>
    
    </div>
  
)
}

export default Forgetpassword