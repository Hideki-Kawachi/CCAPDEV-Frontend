import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PostContext from './context/PostContext';
import SystemBuilderContext from './context/SystemBuilderContext';
import UserContext from './context/UserContext'
import Login from './Login';
import UserHeader from './UserHeader';

const NavBar = () =>{
    const user = useContext(UserContext);
    const systemBuild = useContext(SystemBuilderContext);
    const forumContext = useContext(PostContext);

    const [isLoggedOpen, setIsLoggedOpen] = useState(false);

    useEffect(()=>{
        if(user.username.length<=0){
            setIsLoggedOpen(false);
        }
    },[user.username])
    /*
    //FOR CHECKING CONTEXT
    useEffect(()=>{
        console.log("user context: ");
        console.log("build length: " + user.userBuilds.length);
        user.userBuilds.forEach(currentBuild=>{
            Object.keys(currentBuild).forEach(key=>{
                console.log("key: "+key+"--build: "+currentBuild[key]);
            })
        });
        
        console.log("forum context: "+ forumContext);
        console.log("system builds context: "+ systemBuild);
    })
    */
    const rightNav = {
        true: (
                <UserHeader profilePic={user.profilePic} isLoggedOpen={isLoggedOpen}>{user.username}</UserHeader>
                ),
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

    const createPostRoute = {
        true: (
            <Link id="headerCreatePost" className='nav-button' to={'/PostCreate'}>Create a Post</Link>
        ),
        false:(
            <>
            <a className='nav-button' onClick={()=>setIsLoggedOpen(true)}>Create a Post</a>
            <Login setIsLoggedOpen = {setIsLoggedOpen} isLoggedOpen = {isLoggedOpen}></Login>
            </>
        )
    };

    return(
        <header>
            <div className='left-header'>
                <Link id="headerForum" className='nav-button' to={'/Forum'}>Forums</Link>
                {createPostRoute[user.isLoggedIn]}
                <Link id="headerStoreReview" className='nav-button' to={'/StoreReview'}>Store Reviews</Link>
                {systemBuilderRoute[user.isLoggedIn]}
            </div>
            
            <Link id="headerHome" to={'/'}></Link>

            {rightNav[user.isLoggedIn]}
        </header>
    );
}

export default NavBar;