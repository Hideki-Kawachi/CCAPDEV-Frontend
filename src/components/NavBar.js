import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SystemBuilderContext from './context/SystemBuilderContext';
import UserContext from './context/UserContext'
import Login from './Login';
import UserHeader from './UserHeader';

const NavBar = () =>{
    const user = useContext(UserContext);
    const systemBuild = useContext(SystemBuilderContext);

    const [isLoggedOpen, setIsLoggedOpen] = useState(false);

    useEffect(()=>{
        if(user.username.length<=0){
            setIsLoggedOpen(false);
        }
    },[user.username])

    useEffect(()=>{
        console.log(systemBuild);
    })


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
    };

    const systemBuilderRoute = {
        true: (
            <Link id="headerSystemBuilder" className='nav-button' to={'/SystemBuilder'}>System Builder</Link>
        ),
        false:(
            <>
            <a className='nav-button' onClick={()=>setIsLoggedOpen(true)}>System Builder</a>
            <Login setIsLoggedOpen = {setIsLoggedOpen} isLoggedOpen = {isLoggedOpen}></Login>
            </>
        )
    };

    return(
        <header>
            <div className='left-header'>
                <Link id="headerForum" className='nav-button' to={'/Forum'}>Forums</Link>
                <Link id="headerCreatePost" className='nav-button' to={'/PostCreate'}>Create a Post</Link>
                <Link id="headerStoreReview" className='nav-button' to={'/StoreReview'}>Store Reviews</Link>
                {systemBuilderRoute[user.isLoggedIn]}
            </div>
            
            <Link id="headerHome" to={'/'}></Link>

            {rightNav[user.isLoggedIn]}
        </header>
    );
}

export default NavBar;