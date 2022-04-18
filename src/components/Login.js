import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const navigate = useNavigate();

    let validateForm=()=>{
        return (password.length>0 && email.length>0);
    };

    let submitForm=(e)=>{
        navigate("/");
        e.preventDefault();
        setIsLoggedIn(true);
        console.log(email  + "    " + password + "    " + isLoggedIn);
    }

    useEffect(() => {
        NavBar({isLoggedIn: isLoggedIn},
            console.log(isLoggedIn));
    },[isLoggedIn]);

    return (
        <div className='modal-container' id='modal-container-login'>
            <div className='modal'>
                <span className='login-text'>Log In</span>
                <form className='login-details' onSubmit={submitForm}>
                    <input type={'text'} placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <button type={'submit'} id='login-submit' disabled={!validateForm()}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;