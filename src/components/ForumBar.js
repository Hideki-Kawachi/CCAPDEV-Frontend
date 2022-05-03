import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ForumComment from './ForumComment';
import PostContext from './context/PostContext';

const ForumBar = (props) => {

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [flair, setFlair] = useState(props.flair);
    const [media, setMedia] = useState(props.media);
    const [date, setDate] = useState(props.date);
    const [username, setUsername] = useState(props.username);
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [comments, setComments] = useState(props.comments);

    const postContext = useContext(PostContext);

    const navigate = useNavigate();
    
    function sendPost(){
        postContext.setPostComments(comments);
        postContext.setPostTitle(title);
        postContext.setPostDescription(description);
        postContext.setFlair(flair);
        postContext.setPostMedia(media);
        postContext.setPostDate(date);
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
                <span className='forum-bar-date'>{props.date.toDateString().substring(4)}</span>
                <span className='forum-bar-upvotes' >{props.upvotes}</span>
                </div>
            </div>
    );
}


export default ForumBar;