import React from 'react';

const Login=()=>{
    return (
        <div className='modal-container' id='modal-container-login'>
            <div className='modal'>
                <span className='login-text'>Log In</span>
                <form className='login-details'>
                    <input type={'text'} placeholder='Email'></input>
                    <input type={'password'} placeholder='Password'></input>
                    <button type={'submit'} id='login-submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;