import React from 'react';

function StoreReview() {
    return (
        <div className='content-store-review'>
            <span id='store-review-title'>LOCAL STORE REVIEWS</span>
            <div id='store-review-header'>
                <input type={"search"} id='store-review-search' placeholder='Search...'></input>
                <button id = 'store-review-search-button'>Search</button>
            </div>
        </div> 

    );
}

export default StoreReview;