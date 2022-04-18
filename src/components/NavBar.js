import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    
    useEffect(() =>{
        if(props.isLoggedIn !== isLoggedIn){
            setIsLoggedIn(props.isLoggedIn);
        }
    }, [props.isLoggedIn,isLoggedIn])

    const rightNav = {
        true: (
            <div className='right-header'>
                <Link id="headerUser" className='nav-button' to={'/UserProfile'}><img src={props.profPicPath}></img></Link>
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

            {rightNav[isLoggedIn]}
        </header>
    );
}

export default NavBar;