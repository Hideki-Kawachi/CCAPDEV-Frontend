import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './context/UserContext'
import Login from './Login';

const NavBar = () =>{
    const user = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const isMounted = useRef(false);

    let profilePicPath = "";
    useEffect(()=>{
        profilePicPath = user.profilePic;
        //console.log(isOpen + "THIS IS ISOPEN VAL");
        console.log("HELO" + profilePicPath)
    },[user.profilePic])

    const rightNav = {//profile pic currently not showing but correct directory/file path
        true: (
            <div className='right-header'>
                <Link id="headerUser" className='nav-button' to={'/UserProfile'}><img src={profilePicPath}></img></Link>
            </div>),
        false: (
            <div className='right-header'>
                <a id="headerLogin" className='nav-button' onClick={()=>setIsOpen(true)}>Log in</a>
                <Login setIsOpen = {setIsOpen} isOpen = {isOpen}></Login>
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