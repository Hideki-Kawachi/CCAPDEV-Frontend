import React, { useEffect, useState } from 'react';
import StoreReviewBar from './StoreReviewBar';

function StoreReview() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Date Posted");
    const [sortOrder, setSortOrder] = useState("descending");


   /* useEffect(()=>{
        if(sort=="rating"){
            console.log("RATE");
        }
        else{
            console.log("DATE");
        }

    },[sort])
    */
   
    console.log("FILTERING: " + sort + "IN ORDER: " + sortOrder);
    return (
        <div className='content-store-review'>
            <span id='store-review-title'>LOCAL STORE REVIEWS</span>
            <div id='store-review-header'>
                <input type={"search"} id='store-review-search' placeholder='Search...'></input>
                <button id = 'store-review-search-button'>Search</button>
            </div>
            <div id='store-review-sort-container'>
                <div className='store-review-sort-button'>
                    <span>Date Posted</span>
                </div>
                <div className='store-review-sort-button'>
                    <span >User Rating</span>
                </div>
            </div>
            <StoreReviewBar title={"PC EXPRESS"} description={"This shop is good! Excellent service"} date={"5 hours ago"} rating={5} user={"Hideki123"}></StoreReviewBar>
        </div> 

    );
}

export default StoreReview;