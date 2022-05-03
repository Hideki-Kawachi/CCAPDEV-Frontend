import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';

const ForumComment = (props) => {
    const info = useLocation();
    const user = useContext(UserContext);   
    const [profilePic, setProfilePic] = useState(user.profilePic);
return (  
    <div className='comment-containers'>
            <div className='store-review-view-sub-header'>
                <img src={profilePic} id='post-user-profile-pic'></img> 
                    <span className='forum-post-view-user'>User1 {info.state.user}</span>
                    <p className='forum-post-date'> May 21, 2022 {info.state.date}</p>
                <p classname= 'forum-post-commeent'>I think a GPU upgrade to something like a 5700XT would serve you well if you wanna go 1440p ultrawide. That should be enough
                </p>
            <img className="upvote-comment" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            <span classname = 'upvotes-count-comm'>10</span>
            <img className="downvote-comment" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>

        </div>
);
}

export default ForumComment;