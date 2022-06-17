import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'
import { Buffer } from 'buffer';


const Login=(props)=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const user = useContext(UserContext);

    const navigate = useNavigate();

    let validateForm=(res)=>{
        var errors = 0;
        setError("");
        if(res==="invalid password"){
            setError("password");
            errors++;
        }
        else if(res==="invalid username"){
            setError("username");
            errors++
        }
        
        if(errors===0){
            return true;
        }
        return false;
    };
 
    const sendLogin=(e)=>{
        let picId="";
        e.preventDefault();

        fetch("/PLogin",{
            method: "GET",
            headers: {
                username: username,
                password: password
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log("response from login is:" + data);
            if(validateForm(data)){
                localStorage.setItem('token',data.token);
                console.log("exit from login");
                setError("");
                navigate("/");
                user.setUsername(username);
                user.setIsLoggedIn(true);
                //console.log("data is:" + data.body.profilePic);
                picId = data.body.profilePic;

                fetch("/PImageGet", {
                    method: "GET",
                    headers:{
                        id : picId,
                    }
                }).then(res=>res.json())
                .then(data=>{
                    const bin = data.data.data;
                    const encoded = Buffer.from(bin, 'utf8').toString('base64');
                    user.setProfilePic('data:image/jpeg;base64,' + encoded);
                })
            }
        })

        
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