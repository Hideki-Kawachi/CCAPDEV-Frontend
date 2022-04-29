import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './context/UserContext'
import Login from './Login';
import UserHeader from './UserHeader';

const NavBar = () =>{
    const user = useContext(UserContext);
    const [isLoggedOpen, setIsLoggedOpen] = useState(false);

    useEffect(()=>{
        if(user.username.length<=0){
            setIsLoggedOpen(false);
        }
    },[user.username])


    console.log(user.profilePic + "in navbar");
    const rightNav = {
        true: (
            <div className='right-header'>
                <span className='username-header'>{user.username}</span>
                <UserHeader profilePic={user.profilePic} isLoggedOpen={isLoggedOpen}></UserHeader>
            </div>),
        false: (
            <div className='right-header'>
                <a id="headerLogin" className='nav-button' onClick={()=>setIsLoggedOpen(true)}>Log in</a>
                <Login setIsLoggedOpen = {setIsLoggedOpen} isLoggedOpen = {isLoggedOpen}></Login>
                <Link id="headerRegister" className='nav-button' to={'/Register'}>Register</Link>
            </div>
        )
    }

    return(
        <header>
            <div className='left-header'>
                <Link id="headerForum" className='nav-button' to={'/Forum'}>Forums</Link>
                <Link id="headerCreatePost" className='nav-button' to={'/PostCreate'}>Create a Post</Link>
                <Link id="headerStoreReview" className='nav-button' to={'/StoreReview'}>Store Reviews</Link>
            </div>
            
            <Link id="headerHome" to={'/'}></Link>

            {rightNav[user.isLoggedIn]}
        </header>
    );
}

export default NavBar;