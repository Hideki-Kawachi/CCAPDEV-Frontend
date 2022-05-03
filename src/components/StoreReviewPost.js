import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import StarRating from './StarRating';
import Login from './Login';
import StoreReviewContext from './context/StoreReviewContext';

function StoreReviewPost() {
    const user = useContext(UserContext);
    const storeReview = useContext(StoreReviewContext);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [media, setMedia] = useState("");
    const [username, setUsername] = useState(user.username);
    

    const navigate = useNavigate();

    const back=()=>{
        navigate("/StoreReview");
    }
    
    function sendPost(){
        storeReview.setTitle(title);
        storeReview.setUsername(username);
        storeReview.setDate(date);
        storeReview.setDescription(description);
        storeReview.setRating(rating);
        //storeReview.setMedia(media);
        navigate("/StoreReview");
    }

    return (
        <div className='content-store-review-post'>
            <form>
                <>
                    <div  className='store-review-post-header'>
                    <button className='back-button' onClick={back}></button>
                        <span>Title: </span>
                        <input className='store-review-post-title' type={'text'} value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                        <StarRating setRating = {setRating} edit = {true}></StarRating>  
                    </div>
                    <div className='store-review-post-sub-header'>
                        <span>posted by: </span>
                        <span className='store-review-post-user'>{username}</span>
                        <span className='store-review-post-date'>{date.toDateString().substring(4)}</span>
                    </div>
                </>
                <div className='store-review-post-description'>
                    <span>Description:</span>
                    <textarea className='store-review-post-description-input' type={'textarea'} value={description} placeholder={"..."} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <button className='store-review-post-submit' type={'button'} onClick={()=>sendPost()}>Post Review</button>
            </form>
        </div>
        );
}

export default StoreReviewPost;