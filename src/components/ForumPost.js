import React, { useState } from 'react';
import ForumComment from ".//ForumComment";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ForumPost = () => {
    
const back=()=>{
    navigate(-1);
    console.log("EXIT FROM LOGIN");
}
const navigate = useNavigate();
const info = useLocation();

return (
    
<div className='content-post-view'>

    <div className = "post-header">
        <p className = "post-header-text"> FORUMS AND DISCUSSIONS </p>
    </div>
        
    <div className='content-forum'>
        <br></br>
        <br></br>
        <br></br>
        <div  className='store-review-view-header'>
                    <button className='back-button' onClick={back}></button>
                        <span className='store-review-view-title'> Test Title{info.state.title}</span>
        </div>
                <div className='store-review-view-sub-header'>
                    <span>posted by: </span>
                    <span className='store-review-view-user'> User1 {info.state.user}</span>
                    <span className='store-review-view-date'> May 2, 2022{info.state.date}</span>
                </div>
            <div className='store-review-view-description'>
                <p classname= 'forum-post-text'>Here's the current build, even if prices for the older components dont match what I paid for them.
                Currently I really only play Minecraft and Genshin Impact very often. 
                <br></br> <br></br>
                Otherwise it's a Twitch/Netflix/Reddit machine.
                I've been thinking of upgrading to a 4K monitor or 1400p ultrawide. (so I can sneak the current ultrawide into work and use it there)
                </p>
            </div>
            <div className = "below-post-section"> 
                <img className="upvote-post" src={require('../media/upvote-icon.png')} alt="Comments"/> 
                <p className = 'upvotes-count'>81</p><img className="downvote-post" src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>
    </div>
</div>  
);
} 

export default ForumPost;