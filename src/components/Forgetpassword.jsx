import React from 'react'

function Forgetpassword() {
    return(
    <div className="main">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form onSubmit="" method='POST' className='forget-form'>
      
            <h3>Forget password</h3>
            <label >Email</label>
            <input type='text' id="email"  />
            <button class="login-btn">Send</button>
            <div className='danger-text'></div>
        </form>
    
    </div>
  
)
}

export default Forgetpassword