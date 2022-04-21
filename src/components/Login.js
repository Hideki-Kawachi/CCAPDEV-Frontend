import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'


const Login=(props)=>{
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
        let path = "/profilePictures/";
        path = path.concat(name);
        path = path.concat(".jpg");
        return path;
    }

    

    const exit=()=>{
        props.setIsOpen(false);
        console.log("EXIT FROM LOGIN");
    }

    if(props.isOpen)
    {
        return (
            <div className='modal-container' id='modal-container-login'>
                    <div className='modal'>
                        <button className='exit-button' onClick={exit}></button>
                        <span className='login-text'>LOG IN</span>
                        <form className='login-details'>
                            <input type={'text'} placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                            <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                            <button type={'button'} id='login-submit' disabled={!validateForm()} onClick={(e)=>sendLogin(e)}>Submit</button>
                        </form>
                    </div>
            </div>
        )
    }
    else{
        return null;
    }
}

export default Login;