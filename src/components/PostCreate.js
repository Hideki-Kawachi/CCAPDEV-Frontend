import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import Login from './Login';
import PostContext from './context/PostContext';

function PostCreate() {
    const user = useContext(UserContext);
    const forumPost = useContext(PostContext);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");
    const [username, setUsername] = useState(user.username);
    

    const navigate = useNavigate();

    const back=()=>{
        navigate("/Forum");
    }
    
    function sendPost(){
        forumPost.setPostTitle(title);
        forumPost.setPostUsername(username);
        forumPost.setPostDate(date);
        forumPost.setPostDescription(description);
        //forumPost.setImages(images);
        navigate("/Forum");
    }

    return (
        <div className='content-store-review-post'>
            <form>
                    <div  className='store-review-post-header'>
                    <button className='back-button' onClick={back}></button>
                        <span>Title: </span>
                        <input type={'text'} value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                        <span>Flair: </span>
                        <span classname ='dropdown-border'>
                        <select classname='dropdown'id='flair'>
                            <option value="Technical Issues">Technical Issues</option>
                            <option value="Rate My Build">Rate My Build</option>
                            <option value="Rate My Build">Build Suggestions</option>
                            <option value="Rate My Build">Tips and Tricks</option>
                            <option value="General Discussion and Trends">General Discussion and Trends</option>
                            <option value="News">News</option>
                      </select>
                      </span>
                    </div>
                    <div className='store-review-post-sub-header'>
                        <span>posted by: </span>
                        <span className='store-review-post-user'>{username}</span>
                        <span className='store-review-post-date'>{date.toDateString().substring(4)}</span>
                    </div>
         
                <div className='store-review-post-description'>
                    <span>Description:</span>
                    <textarea className='store-review-post-description-input' type={'textarea'} value={description} placeholder={"..."} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <button className='store-review-post-submit' type={'button'} onClick={()=>sendPost()}>Create Post</button>
            </form>
        </div>
        );
}

export default PostCreate;