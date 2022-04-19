import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './context/UserContext'

const NavBar = () =>{
    const user = useContext(UserContext);

    console.log(user);
    const rightNav = {//profile pic currently not showing but correct directory/file path
        true: (
            <div className='right-header'>
                <Link id="headerUser" className='nav-button' to={'/UserProfile'}><img src={user.profilePic}></img></Link>
            </div>),
        false: (
            <div className='right-header'>
                <Link id="headerLogin" className='nav-button' to={'/Login'}>Log in</Link>
                <Link id="headerRegister" className='nav-button' to={'/Register'}>Register</Link>
            </div>
        )
    }

    return(
        <header>
            <div className='left-header'>
                <Link id="headerForum" className='nav-button' to={'/Forum'}>Forums</Link>
                <Link id="headerCreatePost" className='nav-button' to={'/Post'}>Create a Post</Link>
            </div>
            
            <Link id="headerHome" to={'/'}></Link>

            {rightNav[user.isLoggedIn]}
        </header>
    );
}

export default NavBar;