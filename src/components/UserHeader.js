import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext'

function UserHeader(props) {
    const [isOpen,setIsOpen] = useState(false);
    const user = useContext(UserContext);

    const navigate = useNavigate();

    const logOut=()=>{
        setIsOpen(false);
        user.setEmail("");
        user.setIsLoggedIn(false);
        user.setUsername("");
        user.setProfilePic("");
        navigate("/");
    }

    useEffect(()=>{
        const checkOutsideClick=(e)=>{
            if(e.target!==document.getElementById('profile-pic-header')){
                setIsOpen(false);
            }
        }

        document.addEventListener("click", checkOutsideClick);
        
        return ()=>{
            document.removeEventListener("click",checkOutsideClick);
        }
    },[isOpen])

    const openDropdown = {
        true: (
            <div className='user-dropdown-container'>
                <div className='user-dropdown-text'>
                    <Link id="headerRegister" className='user-dropdown-button' to={'/UserProfile'} style={{textDecoration: 'none',color: 'black'}}>User Profile</Link>
                    <a style={{textDecoration: 'none',color: 'black'}} className='user-dropdown-button' onClick={logOut}>Log Out</a>
                </div> 
            </div>
        )
    }

    return (
    <>
     <div className='right-header-login'>
        <Link id="headerUserBuilds" className='nav-button' to={'/UserBuilds'}>Manage Builds</Link>
        <span className='username-header'>{user.username}</span>
        <img className='profile-pic'src={props.profilePic} id='profile-pic-header' onClick={()=>setIsOpen(!isOpen)}></img>
    </div>
        {openDropdown[isOpen]}
    </>
    );
}

export default UserHeader;
