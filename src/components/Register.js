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

    let firstNameError = false;

    const user = useContext(UserContext);
    const navigate = useNavigate();

    const validateForm=()=>{
        if(password.length>0 && username.length>0 && firstName.length>0 && lastName.length>0 && (password===confirmPassword)){
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regEmail.test(email)) {
                return true;
            }
        }
        firstNameError=true;
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        return false;
    }

    const sendRegister =()=>{
        let isValid = validateForm();
        if(isValid){
            navigate("/");
            console.log("SENT");
        }
        else{
            console.log("error message "+firstNameError);
        }
    }
    
    return(
        <div className='content-register'>
            <div className='register-left'>
            </div>

            <div className='register-right'>
                <div className='register-box'>
                    <div id='inside-register-header'>
                        <span className='font-shadow'>CREATE ACCOUNT</span>
                    </div>
                    <div className='inside-register-right'>
                        <input type={'firstName'} placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} style={firstNameError ? {borderColor:'red'}:{}}></input>
                        <input type={'lasttName'} placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                    </div>
                    <div className='inside-register-right'>
                        <input type={'username'} placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                        <input type={'email'} placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className='inside-register-right'>
                        <input type={'password'} placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        <input type={'Password'} placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                    </div>
                    <button type={'button'} id='register-submit' onClick={sendRegister}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Register;