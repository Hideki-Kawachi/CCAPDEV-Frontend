import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'


const Login=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = useContext(UserContext);

    const navigate = useNavigate();

    let validateForm=()=>{
        return (password.length>0 && username.length>0);
    };
 
    const sendLogin=(e)=>{
        e.preventDefault();
        navigate('/');
        user.setUsername(username);
        user.setIsLoggedIn(!user.isLoggedIn);
        user.setProfilePic(findProfPic(username));
    }

    const findProfPic=(name)=>{
        let path = "../media/profilePictures/";
        path = path.concat(name);
        path = path.concat(".jpg");
        return path;
    }

    return (
        <div className='modal-container' id='modal-container-login'>
                <div className='modal'>
                    <span className='login-text'>Log In</span>
                    <form className='login-details'>
                        <input type={'text'} placeholder='Email' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                        <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        <button type={'button'} id='login-submit' disabled={!validateForm()} onClick={(e)=>sendLogin(e)}>Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default Login;