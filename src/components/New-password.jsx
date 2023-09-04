import React, { useState } from 'react';
//import { useParams } from 'react-router-dom';
import axios from 'axios';

function NewPassword() {
    const [err, setError] = useState('');
    const [values, setValues] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
     
        //let { userId, token } = useParams();
        axios.post('http://localhost:8080/api/forgetpassword/:userId/:token', values)
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
            <form onSubmit={handleSubmit } method='POST' >
            <h3>Forget password</h3>
            
            <label >New Password</label>
            <input type='text' id="new-password" onChange={e => setValues({ ...values, email: e.target.value })} />
            <label >Confirm Password</label>
            <input type='text' id="confirm-password" onChange={e => setValues({ ...values, email: e.target.value })} />
        
            <button class="login-btn">Rest password </button>
            <div className='danger-text'>{err}</div>
        </form>
    
    </div>
  
)
}

export default NewPassword