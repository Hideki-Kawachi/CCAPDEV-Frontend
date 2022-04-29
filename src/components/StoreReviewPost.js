import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import StarRating from './StarRating';
import Login from './Login';

function StoreReviewPost(props) {
    const user = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date().toDateString().substring(4));
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [images, setImages] = useState("");
    const [username, setUsername] = useState(user.username);
    

    const navigate = useNavigate();

    const back=()=>{
        navigate("/StoreReview");
    }

    useEffect(()=>{
        console.log("rating is " + rating);
    },[rating])
    
    function sendPost(){    //send form data to StoreReview through prop functions and add to review array

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
                        <span className='store-review-post-date'>{date}</span>
                    </div>
                </>
                <div className='store-review-post-description'>
                    <span>Description:</span>
                    <textarea className='store-review-description' type={'textarea'} value={description} placeholder={"..."} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <button className='store-review-post-submit' type={'button'} onClick={()=>sendPost}>Post Review</button>
            </form>
        </div>
        );
}

export default StoreReviewPost;