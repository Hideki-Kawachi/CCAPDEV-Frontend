import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar = (props) =>{
    
    const rightNav = {
        true: (
            <div className='right-header'>
                <p>IS LOGGED IN!</p>
            </div>),
        false: (
            <div className='right-header'>
                <Link id="headerLogin" className='nav-button' to={'/Login'}>Log in</Link>
                <Link id="headerRegister" className='nav-button' to={'/Register'}>Register</Link>
            </div>
        )
    }

    console.log("UPDATED NAV BAR  " + props.isLoggedIn);

    return(
        <header>
            <div className='left-header'>
                <Link id="headerForum" className='nav-button' to={'/Forum'}>Forums</Link>
                <Link id="headerCreatePost" className='nav-button' to={'/Post'}>Create a Post</Link>
            </div>
            
            <Link id="headerHome" to={'/'}></Link>

            {rightNav[props.isLoggedIn]}
        </header>
    );
}

export default NavBar;