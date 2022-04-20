import React, { useContext, useEffect, useState } from 'react';
import UserContext from './context/UserContext'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const user = useContext(UserContext);
    const navigate = useNavigate();

    let validateForm=()=>{
        return (password.length>0 && username.length>0 && firstName.length>0 && lastName.length>0 && (password===confirmPassword));
    };

    const sendRegister =()=>{
        navigate("/");
        console.log("SENT");
    }

    return(
        <div className='content-register'>
            <div className='register-left'>
                <img src={require('../media/logo.png')}></img>
            </div>

            <div className='register-right'>
                <span id='create-account'>Create a new account</span>
                <div className='content-register-right'>
                    <input type={'firstName'} placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                    <input type={'lasttName'} placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                </div>
                <div className='content-register-right'>
                    <input type={'username'} placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                    <input type={'email'} placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className='content-register-right'>
                    <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <input type={'Password'} placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                </div>
                <button type={'button'} id='register-submit' disabled={!validateForm()} onClick={(e)=>sendRegister(e)}>Submit</button>
            </div>
        </div>
    );
}

export default Register;