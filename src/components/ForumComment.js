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

    function isCurrentComment(comment){
        return (comment.comment == props.comment && comment.username == props.userComment);
    }

    useEffect(()=>{
        if(props.upvotes != upvotes){
            let currentComment = props.commentStore.findIndex(isCurrentComment);
            //console.log("index:" + currentComment);
            props.commentStore[currentComment].upvotes = upvotes;
            fetch("/PCommentUpdate",{
                method: "POST",
                body: JSON.stringify({
                    username: props.username,
                    title: props.title,
                    flair: props.flair,
                    comments: props.commentStore
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json())
            .then(data=>{
                if(data.length>0 && data!==undefined && data!==null){
                    //console.log("sending back comments");
                    props.setCommentStore(props.commentStore.splice(0,props.commentStore.length,...data));
                }
                else{
                    console.log("error from getting comments:" + data);
                }
            })
        }
    },[upvotes])

    useEffect(()=>{
        var currentComment = props.commentStore.findIndex(isCurrentComment);
        //console.log("comment upvote");
        fetch("/PCommentGet",{
            method: "GET",
            headers:{
                username: props.username,
                title: props.title,
                flair: props.flair,
                index: currentComment
            }
        }).then(res=>res.json())
        .then(data=>{
            //console.log('upvotes for comments ' + currentComment + ':'+ data);
            setUpvotes(data);
        })
    },[])

return (  
    <div className='comment-containers'>
        <hr></hr>
            <div className='store-review-view-sub-header'>
                <img src={profilePic} id='post-user-profile-pic'></img> 
                    <span className='forum-post-view-user'>{props.userComment}</span>
                    <p className='forum-post-date'> {props.date.toDateString().substring(4)}</p>
                <p className= 'forum-post-commeent'>{props.comment}</p>
            <img className="upvote-comment" onClick={()=>setUpvotes(props.upvotes + 1)} src={require('../media/upvote-icon.png')} alt="Comments" /> 
            <span className = 'upvotes-count-comm'>{props.upvotes}</span>
            <img className="downvote-comment" onClick={()=>setUpvotes(props.upvotes - 1)} src={require('../media/upvote-icon.png')} alt="Comments"/> 
            </div>

        </div>
);
}

export default ForumComment;