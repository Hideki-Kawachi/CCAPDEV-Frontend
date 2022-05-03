import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';

const ForumComment = (props) => {
    const user = useContext(UserContext); 
    const [profilePic, setProfilePic] = useState(user.profilePic);
    const [upvotes, setUpvotes] = useState(props.upvotes)

    function upvoteChange(){
        console.log("initial: " + props.upvotes);
        props.upvotes = upvotes + 1;
        console.log("after: "+ props.upvotes);
    }   


return (  
    <div className='comment-containers'>
        <hr></hr>
            <div className='store-review-view-sub-header'>
                <img src={profilePic} id='post-user-profile-pic'></img> 
                    <span className='forum-post-view-user'>{props.username}</span>
                    <p className='forum-post-date'> {props.date.toDateString().substring(4)}</p>
                <p className= 'forum-post-commeent'>{props.comment}</p>
            <img className="upvote-comment" onClick={()=>setUpvotes(props.upvotes + 1)} src={require('../media/upvote-icon.png')} alt="Comments" /> 
            <span className = 'upvotes-count-comm'>{upvotes}</span>
            <img className="downvote-comment" onClick={()=>setUpvotes(props.upvotes - 1)} src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>

        </div>
);
}

export default ForumComment;