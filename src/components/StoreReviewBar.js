import React, { useEffect, useState } from 'react';

function StoreReviewBar(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState(0);
    const [user, setUser] = useState("");

    const starDisplay={
        0 : (
            <>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            </>
        ),
        1 : (
            <>
            <span className='star-checked'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            </>
        ),
        2 : (
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            </>
        ),
        3 : (
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star'></span>
            <span className='star'></span>
            </>
        ),
        4 : (
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star'></span>
            </>
        ),
        5: (
            <>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            <span className='star-checked'></span>
            </>
        )
    }

    useEffect(()=>{
        setTitle(props.title);
        setDescription(props.description);
        setDate(props.date);
        setRating(props.rating);
        setUser(props.user);
    })

    return (  
        <div className='store-review-bar-container'>
            <div className='store-review-left'>
                <span className='store-review-bar-title'>{props.title}</span>
                <hr className='store-review-line'></hr>
                <div className='store-review-bar-description-container'>
                    <span className='store-review-bar-description'>{props.description}</span>
                </div>
            </div>
            <div className='store-review-right'>
                <span className='store-review-bar-date'>{props.date}</span>
                <div className='store-review-star-rating'>
                    {starDisplay[props.rating]}
                </div>
            </div>
        </div>
    );
}

export default StoreReviewBar;