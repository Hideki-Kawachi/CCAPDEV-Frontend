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
    const [error, setError] = useState("");

    const user = useContext(UserContext);
    const navigate = useNavigate();

    const validateForm=()=>{
        let errors = 0;
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(password.length==0 || confirmPassword.length==0 || (password!==confirmPassword)){
            setError("password");
            errors++;
        }
        
        if(firstName==0){
            setError("firstName");
            errors++;
        }
        
        if(lastName==0){
            setError("lastName");
            errors++;
        }
        
        if(username==0){
            setError("username");
            errors++;
        }
        
        if(email==0 || !regEmail.test(email)){
            setError("email");
            errors++;
        }
        
        if(errors>1){
            console.log("invalid registration")
            setError("multiple");
            return false;
        }
        else if(error==0){
            console.log("registration complete");
            return true;
        }
    }

    const sendRegister =()=>{
        setError("");
        if(validateForm()){
            user.setUsername(username);
            user.setEmail(email);
            user.setProfilePic("/profilePictures/default.jpg");
            user.setIsLoggedIn(true);
            user.setBio("Hello World! :)");
            fetch("/Register",{
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json)
            .then(data=>{
                console.log("response is:" + data);
            })
            navigate("/");
        }
    }

    const errorMessage={
        "password":(
            <span className='register-error'>Invalid Password</span>
        ),
        "firstName":(
            <span className='register-error'>Input First Name</span>
        ),
        "lastName":(
            <span className='register-error'>Input Last Name</span>
        ),
        "username":(
            <span className='register-error'>Input Username</span>
        ),
        "email":(
            <span className='register-error'>Invalid Email</span>
        ),
        "multiple":(
            <span className='register-error'>Multiple Invalid Fields</span>
        )
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
                        <input type={'firstName'} placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
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
                    {errorMessage[error]}
                </div>
            </div>
        </div>
    );
}

export default Register;