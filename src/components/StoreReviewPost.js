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
    const [isDisabled, setIsDisabled] = useState(true);
    

    const navigate = useNavigate();

    const back=()=>{
        navigate("/StoreReview");
    }

    useEffect(()=>{
        validatePost();
    },[title,description,rating])

    function validatePost(){
        if(title.length==0 || description.length==0 || rating==0)
        {
            setIsDisabled(true);
        }
        else{
            setIsDisabled(false);
        }
    }
    
    function sendPost(){
        fetch("https://pcguro-backend.herokuapp.com/PStoreReviewPost",{
            method: 'POST',
            body: JSON.stringify({
                username: username,
                title: title,
                description: description,
                date: date,
                rating: rating
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log("from review post:" + data);
            navigate("/StoreReview");
        })
        /*
        storeReview.setReviewTitle(title);
        storeReview.setReviewUsername(username);
        storeReview.setReviewDate(date);
        storeReview.setReviewDescription(description);
        storeReview.setRating(rating);
        */
        //storeReview.setReviewMedia(media);
    };

    const buttonDisabled = {
        true: (
            <span className='store-review-post-submit' style={{backgroundColor: "gray"}}>Post Review</span>
        ),
        false: (
            <button className='store-review-post-submit' type={'button'} onClick={()=>sendPost()} disabled={isDisabled}>Post Review</button>
        )
    };

    return (
        <div className='content-store-review-post'>
            <form>
                <>
                    <div  className='store-review-post-header'>
                    <button className='back-button' onClick={back}></button>
                        <span>Store: </span>
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
                {buttonDisabled[isDisabled]}
            </form>
        </div>
        );
}

export default StoreReviewPost;