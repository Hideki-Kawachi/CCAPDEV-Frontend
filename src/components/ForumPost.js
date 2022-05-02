import React, { useContext, useEffect, useState } from 'react';
import ForumComment from ".//ForumComment";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';

const ForumPost = () => {
    
const back=()=>{
    navigate(-1);
    console.log("EXIT FROM LOGIN");
}
const navigate = useNavigate();
const info = useLocation();
const user = useContext(UserContext);
const [profilePic, setProfilePic] = useState(user.profilePic);

return (
    
<div className='content-post-view'>
    <br></br>
    <div className = "post-header">
        <p className = "post-header-text"> FORUMS AND DISCUSSIONS </p>
    </div>
    <br></br>
    <div className='content-forum'>
        <div className = "forum-post-left">
            <div className = "below-post-section"> 
                <img className="upvote-post" src={require('../media/upvote-icon.png')} alt="Comments"/> 
                <p className = 'upvotes-count'>81</p><img className="downvote-post" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>
            </div>
        <div  className='store-review-view-header'>
                    <button className='back-button' onClick={back}></button>               
        </div>

        <div className = "forum-post-right">
            <div className='store-review-view-title'> Test Title{info.state.title}</div>  
            <div class ="forum-post-flair">Flair Name</div>

            <div className='forum-view-description'>
            <div className='store-review-view-sub-header'>
                    <img src={profilePic} id='post-user-profile-pic'></img> 
                    <span className='forum-post-view-user'>User1 {info.state.user}</span>
                    <p className='forum-post-date'> May 2, 2022 {info.state.date}</p>
                </div>
                <p classname= 'forum-post-text'>Here's the current build, even if prices for the older components dont match what I paid for them.
                Currently I really only play Minecraft and Genshin Impact very often. 
                <br></br> <br></br>
                Otherwise it's a Twitch/Netflix/Reddit machine.
                I've been thinking of upgrading to a 4K monitor or 1400p ultrawide. (so I can sneak the current ultrawide into work and use it there)
                </p>
            </div>
        </div>
    </div>
</div>
);
} 

export default ForumPost;