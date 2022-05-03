import React, { useContext, useEffect, useState } from 'react';
import ForumComment from "./ForumComment";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserContext from './context/UserContext';
import CommentContext from './context/CommentContext';
import PostContext from './context/PostContext';
import Login from './Login';

const ForumPost = () => {
    
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const commentContext = useContext(CommentContext);
    const postContext = useContext(PostContext);


    const [title, setTitle] = useState(postContext.postTitle);
    const [description, setDescription] = useState(postContext.postDescription);
    const [flair, setFlair] = useState(postContext.flair);
    const [media, setMedia] = useState(postContext.postMedia);
    const [date, setDate] = useState(postContext.postDate);
    const [username, setUsername] = useState(postContext.postUsername);
    const [upvotes, setUpvotes] = useState(postContext.postUpvotes);

    const [isLoggedOpen, setIsLoggedOpen] = useState(false);

    const [comments, setComments] = useState([]);

    const [profilePic, setProfilePic] = useState(user.profilePic);
    const [newComment, setNewComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    

    function forumComment(comComment, comUsername, comDate, comUpvotes){
        this.comment = comComment;
        this.username = comUsername;
        this.date = comDate;
        this.upvotes = comUpvotes;
    }

    const back=()=>{
        console.log("BACKBACKBACK");
        postContext.setPostComments([]);
        postContext.setPostTitle("");
        postContext.setPostDescription("");
        postContext.setFlair("");
        postContext.setPostMedia("");
        postContext.setPostDate(new Date());
        postContext.setPostUpvotes(0);
        postContext.setPostUsername("");
        navigate("/Forum");
    }

    useEffect(()=>{
        console.log("comments in context are: "+ postContext.postComments);
        let tempList = [];
        if(postContext.postTitle.length>0){ 
            postContext.postComments.forEach((comment,index)=>{
                tempList.push(<ForumComment key={index} username={comment.username} date={comment.date} upvotes={comment.upvotes} comment={comment.comment}></ForumComment>)
            })
            console.log("temp list is: "+ tempList);
            setCommentList(tempList);
        }
            
    },[postContext.postComments])

    function postComment(){
        if(user.username.length==0 && !user.isLoggedIn){
            console.log("navigating here");
            navigate("/Login");
        }
        console.log("this is new comment: " + newComment);
        postContext.setPostComments(oldComments=>[new forumComment(newComment,user.username,new Date(),0),...oldComments]);
        setNewComment("");
    }

    const forumPostRoute = {
        true: (
            <button id = "comment-button" onClick={postComment}>Post Comment</button>
        ),
        false:(
            <>
            <a id='comment-button' onClick={()=>setIsLoggedOpen(true)}>Post Comment</a>
            <Login setIsLoggedOpen = {setIsLoggedOpen} isLoggedOpen = {isLoggedOpen}></Login>
            </>
        )
    };

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
                    <img className="upvote-post" onClick={()=>postContext.setPostUpvotes(upvotes + 1)} src={require('../media/upvote-icon.png')} alt="Comments"/> 
                    <p className = 'upvotes-count'>{postContext.postUpvotes}</p><img className="downvote-post" onClick={()=>postContext.setPostUpvotes(upvotes - 1)} src={require('../media/upvote-icon.png')} alt="Comments"/> 
                </div>
                </div>
            <div  className='store-review-view-header'>
                                    
            </div>

            <div className = "forum-post-right">
            <button className='back-button-forum' onClick={back}></button>
                <div className='store-review-view-title'>{postContext.postTitle}</div>  
                <div className ="forum-post-flair">{postContext.flair}</div>

                <div className='forum-view-description'>
                <div className='store-review-view-sub-header'>
                        <img src={profilePic} id='post-user-profile-pic'></img> 
                        <span className='forum-post-view-user'>{postContext.postUsername}</span>
                        <p className='forum-post-date'>{postContext.postDate.toDateString().substring(4)}</p>
                    </div>
                    <p className= 'forum-post-text'>
                        {postContext.postDescription}
                    </p>
                    </div>
                    <p><img className="icon" src={require('../media/comments-icon.png')} alt="Comments"/> Leave a Comment: </p>
                    <textarea type={"text"} id='comment-box' value={newComment} onChange={(e)=>setNewComment(e.target.value)} placeholder='  ...'></textarea>
                    {forumPostRoute[user.isLoggedIn]}
                    <p> Comments: </p>
                    {commentList}
            </div>
        </div>
    </div>
    );
} 

export default ForumPost;