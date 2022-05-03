import React, { useContext, useEffect, useState } from 'react';
import ForumComment from "./ForumComment";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';

const ForumPost = (props) => {
    
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
    <div className='content-forum-post'>
        <div className = "forum-post-left">
            <div className = "below-post-section"> 
                <img className="upvote-post" src={require('../media/upvote-icon.png')} alt="Comments"/> 
                <p className = 'upvotes-count'>{info.state.upvotes}</p><img className="downvote-post" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>
            </div>
        <div  className='store-review-view-header'>
                                   
        </div>

        <div className = "forum-post-right">
        <button className='back-button-forum' onClick={back}></button>
            <div className='store-review-view-title'>{info.state.title}</div>  
            <div class ="forum-post-flair">{info.state.flair}</div>

            <div className='forum-view-description'>
            <div className='store-review-view-sub-header'>
                    <img src={profilePic} id='post-user-profile-pic'></img> 
                    <span className='forum-post-view-user'>{info.state.username}</span>
                    <p className='forum-post-date'>{info.state.date}</p>
                </div>
                <p classname= 'forum-post-text'>
                    {info.state.description}
                </p>
                </div>
                <form>
                <p><img className="icon" src={require('../media/comments-icon.png')} alt="Comments"/> Leave a Comment: </p>
                <textarea type={"text"} id='comment-box' placeholder='  ...'></textarea>
                <button id = "comment-button">Comment</button>
                </form>
               
                <p> Comments: </p>
                
                <ForumComment username ="CarloC" date = "May 03, 2022" upvotes = "11" comment = "I think a GPU upgrade to something like a 5700XT would serve you well if you wanna go 1440p ultrawide. That should be enough"/>                
                <ForumComment username ="Hidekiii" date = "May 22, 2022" upvotes = "5" comment = "I think a GPU upgrade to something like a 5700XT would serve you well if you wanna go 1440p ultrawide. That should be enough"/>
        </div>
    </div>
</div>
);
} 

export default ForumPost;