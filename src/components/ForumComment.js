import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';

const ForumComment = (props) => {
    const user = useContext(UserContext); 
    const [profilePic, setProfilePic] = useState(user.profilePic);
    const [upvotes, setUpvotes] = useState(props.upvotes)
    
    function forumComment(comComment, comUsername, comDate, comUpvotes){
        this.comment = comComment;
        this.username = comUsername;
        this.date = comDate;
        this.upvotes = comUpvotes;
    }

    useEffect(()=>{
        if(props.upvotes != upvotes){
            let currentComment = props.commentStore.findIndex((com => ((com.comment == props.comment) && (com.username == props.username))));
            props.commentStore[currentComment].upvotes = upvotes;
            //console.log("comments are:  " + props.commentStore);
            fetch("/PCommentUpdate",{
                method: "POST",
                body: JSON.stringify({
                    title: props.title,
                    description: props.description,
                    comments: props.commentStore,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json())
            .then(data=>{
                //console.log("data from comment upvote:" + data);
            })
        }
    },[upvotes])
//not working yet
    useEffect(()=>{
        fetch("/PCommentGet",{
            method: "GET",
            headers:{
                title: props.title,
                description: props.description,
                comment: props.comment,
                username: props.username
            }
        }).then(res=>res.json())
        .then(data=>{
            //console.log("DATA:" + data);
        })
    },[])
//

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