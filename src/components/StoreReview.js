import React, { useEffect, useState } from 'react';

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
        </div> 

    );
}

export default StoreReview;