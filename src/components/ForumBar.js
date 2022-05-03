import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForumBar = (props) => {


    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [flair, setFlair] = useState(props.flair);
    const [media, setMedia] = useState(props.media);
    const [date, setDate] = useState(props.date);
    const [username, setUsername] = useState(props.username);
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [comments, setComments] = useState(props.comments);

    const navigate = useNavigate();

    return(

            <div className='forum-bar-container'>
                <div className='store-review-bar-left'>
                    <Link className='store-review-bar-top-container' to={'/ForumPost'} state={{title: title, date: date, username: username, flair: flair, description: description, comments: comments, upvotes: upvotes, media: media}}>
                    <span className='post-title'>{props.title}</span>
                    </Link>
                    <br></br>
                    <span className='post-user-text'>by: {props.username}</span> 
                   
                   
                    <span className ="forum-bar-flair">{props.flair}</span> 
                    <img className="comment" src={require('../media/comments-icon.png')} alt="Comments"/> 
                    <span className= "comment-icon-forum">2</span>
            </div>
            


            <div className='store-review-bar-right'>
                <span className='forum-bar-date'>{props.date}</span>
                <span className='forum-bar-upvotes'>{props.upvotes}</span>
                </div>
            </div>
    );
}


export default ForumBar;