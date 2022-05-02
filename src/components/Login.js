import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'


const Login=(props)=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const user = useContext(UserContext);

    const navigate = useNavigate();

    let validateForm=()=>{
        setError("");
        if(password.length==0 && username.length==0){
            setError("both");
        }
        else if(password.length==0){
            setError("password");
        }
        else if(username.length==0){
            setError("username");
        }
        return (password.length>0 && username.length>0);
    };
 
    const sendLogin=(e)=>{
        e.preventDefault();
        if(validateForm()){
            setError("");
            console.log("valid");
            navigate('/');
            user.setUsername(username);
            user.setIsLoggedIn(!user.isLoggedIn);
            user.setProfilePic(findProfPic(username));
        }
    }

    const findProfPic=(name)=>{
        let path = "/profilePictures/";
        path = path.concat(name);
        path = path.concat(".jpg");
        return path;
    }

    

    const exit=()=>{
        setError("");
        props.setIsLoggedOpen(false);
        console.log("EXIT FROM LOGIN");
    }

    const errorMessage={
        "password": (
            <span className='login-error'>Invalid Password!</span>
        ),
        "username": (
            <span className='login-error'>Invalid Username!</span>
        ),
        "both": (
            <span className='login-error'>Invalid Username and Password!</span>
        )
    }

    if(props.isLoggedOpen)
    {
        return (
            <div className='modal-container' id='modal-container-login'>
                    <div className='modal'>
                        <button className='exit-button' onClick={exit}></button>
                        <span className='login-text'>LOG IN</span>
                        <form className='login-details'>
                            <input type={'text'} placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                            <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                            <button type={'button'} className='submit-button' onClick={(e)=>sendLogin(e)}>Submit</button>
                        </form>
                        {errorMessage[error]}
                    </div>
            </div>
        )
    }
    else{
        return null;
    }
}

export default Login;