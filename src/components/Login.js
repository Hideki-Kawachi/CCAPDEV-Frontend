import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login=(props)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    let validateForm=()=>{
        return (password.length>0 && email.length>0);
    };
    
    const sendLogin=(e)=>{
        e.preventDefault();
        navigate('/');
        props.loginChange(true,email);      //change email to username
    }

    return (
        <div className='modal-container' id='modal-container-login'>
            <div className='modal'>
                <span className='login-text'>Log In</span>
                <form className='login-details'>
                    <input type={'text'} placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <button type={'button'} id='login-submit' disabled={!validateForm()} onClick={(e)=>sendLogin(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;