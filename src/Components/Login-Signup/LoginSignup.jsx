import React, { useState } from 'react';
import './LoginSignup.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import sign_up_picture from '../Assets/SignUpPicture.png'

const LoginSignup = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className='page'>
      <div className='content'>
      <img className="Photo" src={sign_up_picture} alt="Picture"/>
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" placeholder="Name" />
      </div>}

      <div className="input">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="email" placeholder="Email" />
      </div>

      <div className="input">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="password" placeholder="Password" />
      </div>

      {action==="Sign Up"?<div> </div>:<div className="forgot-password">Forgot Password? <span> Click Here. </span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up </div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login </div>
      </div>  
      </div>
    </div>
    </div>
    </div>
  );
};


export default LoginSignup