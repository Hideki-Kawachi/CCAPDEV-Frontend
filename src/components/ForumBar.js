import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostContext from './context/PostContext';

const ForumBar = (props) => {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [flair, setFlair] = useState(props.flair);
    const [media, setMedia] = useState(props.media);
    const [datePosted, setDate] = useState(props.date);
    const [username, setUsername] = useState(props.username);
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [comments, setComments] = useState(props.comments);
    const [dateShow, setDateShow] = useState("");

    const currentDate = new Date();
    let finalDate;

    const postContext = useContext(PostContext);

    useEffect(()=>{
        setTitle(props.title);
        setDescription(props.description);
        setFlair(props.flair);
        setMedia(props.media);
        setDate(props.date);
        setUsername(props.username);
        setUpvotes(props.upvotes);
        setComments(props.comments);
    },[props])

    useEffect(()=>{
        if(currentDate.getFullYear()===datePosted.getFullYear()){
            if(currentDate.getMonth()===datePosted.getMonth()){
                if(currentDate.getDate()===datePosted.getDate()){
                    if(currentDate.getHours()===datePosted.getHours()){
                        if(currentDate.getMinutes()===datePosted.getMinutes()){
                            finalDate = currentDate.getSeconds() - datePosted.getSeconds();
                            if(finalDate==1)
                                setDateShow(finalDate + " second ago");
                            else
                                setDateShow(finalDate + " seconds ago");
                        }
                        else{
                            finalDate = currentDate.getMinutes() - datePosted.getMinutes();
                            if(finalDate==1)
                                setDateShow(finalDate + " minute ago");
                            else
                                setDateShow(finalDate + " minutes ago");
                        }
                        
                    }
                    else{
                        finalDate = currentDate.getHours() - datePosted.getHours();
                        if(finalDate==1)
                            setDateShow(finalDate + " hour ago");
                        else
                            setDateShow(finalDate + " hours ago");
                    }
                    
                }
                else{
                    finalDate = currentDate.getDate() - datePosted.getDate();
                    if(finalDate==1)
                        setDateShow(finalDate + " day ago");
                    else
                        setDateShow(finalDate + " days ago");
                }
                
            }
            else{
                finalDate = datePosted.toDateString().substring(4);
                setDateShow(finalDate);
            }
        }
        else{
            finalDate = datePosted.toDateString().substring(4);
            setDateShow(finalDate);
        }
        
    },[currentDate]);
    
    function sendPost(){
        postContext.setPostComments(comments);
        postContext.setPostTitle(title);
        postContext.setPostDescription(description);
        postContext.setFlair(flair);
        postContext.setPostMedia(media);
        postContext.setPostDate(datePosted);
        postContext.setPostUpvotes(upvotes);
        postContext.setPostUsername(username);
    }

    return(

            <div className='forum-bar-container'>
                <div className='store-review-bar-left'>
                    <Link className='store-review-bar-top-container' to={'/ForumPost'} onClick={sendPost}>
                    <span className='post-title'>{props.title}</span>
                    </Link>
                    <br></br>
                    <span className='post-user-text'>by: {props.username}</span> 
                   
                   
                    <span className ="forum-bar-flair">{props.flair}</span> 
                    <img className="comment" src={require('../media/comments-icon.png')} alt="Comments"/> 
                    <span className= "comment-icon-forum">{props.comments.length}</span>
            </div>
            


            <div className='store-review-bar-right'>
                <span className='forum-bar-date'>{dateShow}</span>
                <span className='forum-bar-upvotes' >{props.upvotes}</span>
                </div>
            </div>
    );
}


export default ForumBar;