import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';

function StoreReviewView() {
    const info = useLocation();

    const navigate = useNavigate();

    const back=()=>{
        navigate(-1);
        console.log("EXIT FROM LOGIN");
    }

    return (
        <div className='content-store-review-view'>
            <>
                <div  className='store-review-view-header'>
                <button className='back-button' onClick={back}></button>
                    <span className='store-review-view-title'>{info.state.title}</span>
                    <StarRating rating = {info.state.rating}></StarRating>
                </div>
                <div className='store-review-view-sub-header'>
                    <span>posted by: </span>
                    <span className='store-review-view-user'> {info.state.user}</span>
                    <span className='store-review-view-date'>{info.state.date}</span>
                </div>
            </>
            <div className='store-review-view-description'>
                <span>{info.state.description}</span>
            </div>
        </div>
      );
}

export default StoreReviewView;