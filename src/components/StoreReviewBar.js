import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function StoreReviewBar(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState(1);
    const [user, setUser] = useState("");

    useEffect(()=>{
        setTitle(props.title);
        setDescription(props.description);
        setDate(props.date);
        setRating(props.rating);
        setUser(props.user);
    })

    return (  
        <div className='store-review-bar-container'>
            <div className='store-review-bar-left'>
                <Link className='store-review-bar-top-container' to={'/StoreReviewView'} state={{title: title, description: description, date: date, user: user, rating: rating}}>
                    <span className='store-review-bar-title'>{title}</span>
                    <span className='store-review-bar-user'>by: {user}</span>
                </Link>
                <hr className='store-review-bar-line'></hr>
                <div className='store-review-bar-description-container'>
                    <span className='store-review-bar-description'>{description}</span>
                </div>
            </div>
            <div className='store-review-bar-right'>
                <span className='store-review-bar-date'>{date}</span>
                <div className='store-review-bar-rating'>
                    <StarRating rating = {rating}></StarRating>
                </div>
            </div>
        </div>
    );
}

export default StoreReviewBar;