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

    const validateForm=(res)=>{
        let errors = 0;
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(password.length<5){
            setError("passwordLength");
            errors++;
        }
        else if((password!==confirmPassword)){
            setError("password");
            errors++;
        }

        if(firstName.length===0){
            setError("firstName");
            errors++;
        }
        
        if(lastName.length===0){
            setError("lastName");
            errors++;
        }
        
        if(username.length===0 || res==="invalid username"){
            setError("username");
            errors++;
        }
        
        if(email.length===0 || !regEmail.test(email)|| res==="invalid email"){
            setError("email");
            errors++;
        }
        
        if(errors>1){
            console.log("invalid registration")
            setError("multiple");
            return false;
        }
        else if(errors===0){
            console.log("registration complete");
            return true;
        }
    }

    const sendRegister =()=>{
        setError("");
        console.log("FIRST NAME HERE:" + firstName);
        if(validateForm()){     //form complete checking
            fetch("/Register",{
                method: "GET",
                headers: {
                    first: firstName,
                    last: lastName,
                    username: username,
                    email: email,
                    password: password
                },
            }).then(res=>res.json())
            .then(data=>{
                if(validateForm(data)){
                    user.setUsername(username);
                    user.setEmail(email);
                    user.setProfilePic("/profilePictures/default.jpg");
                    user.setIsLoggedIn(true);
                    user.setBio("Hello World! :)");
                    
                    setPassword("");
                    setConfirmPassword("");
    
                    navigate("/");
                }
            })
        }
    }

    const errorMessage={
        "password":(
            <span className='register-error'>Invalid Password</span>
        ),
        "passwordLength":(
            <span className='register-error'>Minimum Password Length is 5</span>
        ),
        "firstName":(
            <span className='register-error'>Input First Name</span>
        ),
        "lastName":(
            <span className='register-error'>Input Last Name</span>
        ),
        "username":(
            <span className='register-error'>Invalid Username</span>
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