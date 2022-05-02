import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForumBar = (props) => {


    const [Title, setTitle] = useState("");
    const [datePosted, setDatePosted] = useState(new Date());
    const [dateShow, setDateShow] = useState("");
    const [username, setUsername] = useState("");
    const [upVote, setUpvote] = useState("");
    const currentDate = new Date();
    const info = useLocation();
    const navigate = useNavigate();
    
    useEffect(()=>{
        setTitle(props.title);
        setDatePosted(props.date);
        
        setUsername(props.username);
    });

    return(

            <div className='forum-bar-container'>
                <div className='store-review-bar-left'>
                    <Link className='store-review-bar-top-container' to={'/ForumPost'} state={{title: Title, date: dateShow, username: username}}>
                    <span className='post-title'>{props.Title}</span>
                    </Link>
                    <br></br>
                    <span className='post-user-text'>by: {props.username}</span> 
                   
                   
                    <span class ="forum-bar-flair">{props.Flair}</span> 
                    <img className="comment" src={require('../media/comments-icon.png')} alt="Comments"/> 
                    <span class= "comment-icon-forum">{props.commentCount}  </span>
            </div>
            


            <div className='store-review-bar-right'>
                <span className='forum-bar-date'>{props.datePosted}</span>
                <span className='forum-bar-upvotes'>{props.Upvotes}</span>
                </div>
            </div>
    );
}


export default ForumBar;