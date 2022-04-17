import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <header>
            <div className='left-header'>
                <Link id="headerForum" className='nav-button' to={'/Forum'}>Forums</Link>
                <Link id="headerCreatePost" className='nav-button' to={'/Post'}>Create a Post</Link>
            </div>
            
            <Link id="headerHome" to={'/Home'}></Link>

            <div className='right-header'>
                <Link id="headerLogIn" className='nav-button' to={'/LogIn'}>Log in</Link>
                <Link id="headerRegister" className='nav-button' to={'/Register'}>Register</Link>
            </div>
        </header>
    );
}

export default NavBar;