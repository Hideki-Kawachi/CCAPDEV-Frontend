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
        <hr></hr>
            <div className='store-review-view-sub-header'>
                <img src={profilePic} id='post-user-profile-pic'></img> 
                    <span className='forum-post-view-user'>{props.username}</span>
                    <p className='forum-post-date'> {props.date}</p>
                <p classname= 'forum-post-commeent'>{props.comment}</p>
            <img className="upvote-comment" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            <span classname = 'upvotes-count-comm'>{props.upvotes}</span>
            <img className="downvote-comment" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>

        </div>
);
}

export default ForumComment;