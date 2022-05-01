import React, { useContext } from 'react';
import UserContext from './context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProfile =()=>{
    const user = useContext(UserContext);

    const navigate = useNavigate();

    const back=()=>{
        navigate(-1);
    }

    return(
        <div className='content-user-profile'>
            <div className='user-profile-container'>
            <button className='back-button' onClick={back}></button>
                <div className='user-profile-pic-container'>   
                    <img src={user.profilePic} id='user-profile-pic'></img> 
                </div>
                <span className='user-profile-username'>{user.username}</span>
                <span style={{position: 'relative', left: '-180px'}}>My Bio: </span>
                <div className='user-profile-bio-container'>
                    <span className='user-profile-bio'>{user.bio}</span>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;