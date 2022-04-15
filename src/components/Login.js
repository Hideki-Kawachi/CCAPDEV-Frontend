import React, { Component } from 'react';

class Login extends Component {
    state = {} 
    render() { 
        return (
            <div className='popup-box'>
                <span className='login-text'>Log In</span>
                <form className='login-details'>
                    <input type={'text'} placeholder='Email'></input>
                    <input type={'password'} placeholder='Password'></input>
                    <button type={'submit'}>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Login