import React, { useContext, useEffect, useState } from 'react';
import ForumComment from "./ForumComment";
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import PostContext from './context/PostContext';
import Login from './Login';
import { useLocation } from 'react-router-dom';
import { Buffer } from 'buffer';

const ForumPost = () => {

    const info = useLocation();
    
    const navigate = useNavigate();
    const user = useContext(UserContext);
    //const commentContext = useContext(CommentContext);
    const postContext = useContext(PostContext);

    

    const [isLoggedOpen, setIsLoggedOpen] = useState(false);

    const [title, setTitle] = useState(info.state.title);
    const [description, setDescription] = useState(info.state.description);
    const [upvotes, setUpvotes] = useState(info.state.upvotes);
    const [flair, setFlair] = useState(info.state.flair);
    const [dateShow, setDateShow] = useState(info.state.dateShow);
    const [datePosted, setDatePosted] = useState(info.state.datePosted);
    const [username, setUsername] = useState(info.state.username);
    const [style, setStyle] = useState("upvote-post");
    const [style2, setStyles] = useState("downvote-post");

    const [profilePic, setProfilePic] = useState("");
    const [newComment, setNewComment] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [comments, setComments] = useState(info.state.comments);

    function forumComment(comComment, comUsername, comDate, comUpvotes){
        this.comment = comComment;
        this.username = comUsername;
        this.date = comDate;
        this.upvotes = comUpvotes;
    }



    const back=()=>{
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
        //console.log("getting post from db");
        fetch("/PForumPost",{
            method: "GET",
            headers:{
                username: username,
                title: title,
                flair: flair
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data!==null && data!==undefined){
                //console.log("data here inside:" + data);
                setTitle(data.title);
                setDescription(data.description);
                setFlair(data.flair);
                setUsername(data.username);
                setDatePosted(new Date(data.date).toDateString().substring(4))
                setUpvotes(data.upvotes);
                setComments(data.comments);

                fetch("/PProfPicGet", {
                    method: "GET",
                    headers: {
                        username: data.username
                    }
                }).then(res=>res.json())
                .then(data=>{
                    const num1 = data.data.data;
                    let encoded = Buffer.from(num1, 'utf8').toString('base64');
                    setProfilePic('data:image/jpeg;base64,' + encoded);
                })
            }
        })
    },[])

//new comment
    useEffect(()=>{
        //console.log("comment effect");
        let tempList = [];
        if(comments.length>0){ 
            comments.forEach((comment,index)=>{
                tempList.push(<ForumComment key={index} commentStore={comments} setCommentStore={setComments}title = {title} description={description} username={username} userComment={comment.username} flair={flair} date={new Date(comment.date)} upvotes={comment.upvotes} comment={comment.comment}></ForumComment>)
            });
            setCommentList(tempList);
        
            //console.log("POSTING COMMENTS TO DB");
            fetch("/PPostUpdate",{
                method: "POST",
                body: JSON.stringify({
                    title: info.state.title,
                    description: info.state.description,
                    upvotes: upvotes,
                    comments: comments,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json())
            .then(data=>{
                //console.log("DONE PUSHING:" + data);
            })
        }
    },[comments])

    function postComment(){
        if(user.username.length==0 && !user.isLoggedIn){
            navigate("/Login");
        }
        setComments(oldComments=>[new forumComment(newComment,user.username,new Date(),0),...oldComments]);
        setNewComment("");
    }
//

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

    function upVote(){
        setUpvotes(info.state.upvotes+1);
        setStyle("upvote-post-disabled");
        setStyles("downvote-post");
    }

    function downVote(){
        setUpvotes(info.state.upvotes-1);
        setStyles("downvote-post-disabled");
        setStyle("upvote-post");
    }

    useEffect(()=>{
        if(upvotes!==info.state.upvotes){
            fetch("/PPostUpdate",{
                method: "POST",
                body: JSON.stringify({
                    title: info.state.title,
                    description: info.state.description,
                    upvotes: upvotes,
                    comments: comments,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json())
            .then(data=>{
                console.log("data from post:" + data);
            })
        }
    },[upvotes])

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
                    <img className={style} onClick={()=>{upVote()}} src={require('../media/upvote-icon.png')} alt="Comments"/> 
                    <p className = 'upvotes-count'>{upvotes}</p><img className={style2} onClick={()=>{downVote()}} src={require('../media/upvote-icon.png')} alt="Comments"/> 
                </div>
                </div>
            <div  className='store-review-view-header'>
                                    
            </div>

            <div className = "forum-post-right">
            <button className='back-button-forum' onClick={back}></button>
                <div className='store-review-view-title'>{title}</div>  
                <div className ="forum-post-flair">{info.state.flair}</div>

                <div className='forum-view-description'>
                <div className='store-review-view-sub-header'>
                        <img src={profilePic} id='post-user-profile-pic'></img> 
                        <span className='forum-post-view-user'>{info.state.username}</span>
                        <p className='forum-post-date'>{info.state.dateShow}</p>
                    </div>
                    <p className= 'forum-post-text'>
                        {info.state.description}
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