import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import PostContext from './context/PostContext';

function PostCreate() {
    const user = useContext(UserContext);
    const postContext = useContext(PostContext);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    //const [images, setImages] = useState("");
    const [username, setUsername] = useState(user.username);
    const [flair, setFlair] = useState("Technical Issues");
    

    const navigate = useNavigate();

    const back=()=>{
        navigate("/Forum");
    }
    
    function sendPost(){
        console.log(flair);
        /*postContext.setImages(images);
        console.log("this is the description:" + description);
        console.log("flair is:" + flair);
        */

        fetch("/PPostCreate", {
            method: "POST",
            body : JSON.stringify({
                title : title,
                description : description,
                flair : flair,
                date : date,
                username : username,
                comments : []
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log("response from front is:" + data);
            postContext.setPostTitle(title);
            postContext.setPostUsername(username);
            postContext.setPostDate(date);
            postContext.setPostDescription(description);
            postContext.setFlair(flair);
            navigate("/Forum");
        })
        
    
    }


    return (
        <div className='content-store-review-post'>
            <form>
                    <div  className='store-review-post-header'>
                    <button className='back-button' onClick={back}></button>
                        <div className='title-flair-container'>
                        <span>Title: </span>
                        <input type={'text'} value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                        </div>

                        <div className='title-flair-container'>
                        <span>Flair: </span>
                        <span className ='dropdown-border'>
                        <select className='dropdown'id='flair' onChange={(e)=>setFlair(e.target.value)}>
                            <option value="Technical Issues">Technical Issues</option>
                            <option value="Rate My Build">Rate My Build</option>
                            <option value="Build Suggestions">Build Suggestions</option>
                            <option value="Tips and Tricks">Tips and Tricks</option>
                            <option value="General Discussion and Trends">General Discussion and Trends</option>
                            <option value="News">News</option>
                        </select>
                        </span>
                        </div>

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
                <button className='store-review-post-submit' type={'button'} onClick={sendPost}>Create Post</button>
            </form>
        </div>
        );
}

export default PostCreate;