import React, { useEffect, useState } from 'react';
import StoreReviewBar from './StoreReviewBar';
import { Link } from 'react-router-dom';

function StoreReview() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Date Posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [reviewList, setReviewList] = useState([]);

    let tempList=[];
    let reviewPost1 = new reviewPost("PC EXPRESS", "This shop is good! Excellent service.", new Date('April 28, 2022 15:47:00'), 4, "Hideki123");
    let reviewPost2 = new reviewPost("PC CORNER", "This shop is good! Excellent service.", new Date('April 25, 2022 14:32:00'), 3, "CarloC");
    let reviewPost3 = new reviewPost("Desktop Workshop", "This shop is good! Excellent service.", new Date('Febuary 22, 2022 2:45:00'), 5, "MartinA");
    let reviewPost4 = new reviewPost("PC Gilmore", "This shop is good! Excellent service.", new Date('January 24, 2022 15:40:00'), 2, "GinoGGG");
    let reviewPost5 = new reviewPost("EasyPc", "This shop is good! Excellent service.", new Date('December 25, 2021 23:31:00'), 4, "SirN");
    const reviews=[reviewPost1,reviewPost2,reviewPost3,reviewPost4,reviewPost5];

    function reviewPost(title, description, date, rating, user){
        this.title = title;
        this.description = description;
        this.date = date;
        this.rating = rating;
        this.user = user;
    }

    useEffect(()=>{
        if(sort=="Date posted")
        {
            if(!isSortReverse){
                reviews.sort((a, b)=>b.date - a.date);
            }
            else{
                reviews.sort((a, b)=>a.date - b.date);
            }
        }
        else{
            if(!isSortReverse){
                reviews.sort((a, b)=>b.rating - a.rating);
            }
            else{
                reviews.sort((a, b)=>a.rating - b.rating);
            }
        }
        tempList = [];
        reviews.forEach((review,index)=>{
            tempList.push(<StoreReviewBar key={index} title={review.title} description={review.description} date={review.date} rating={review.rating} user={review.user}></StoreReviewBar>)
        })
        setReviewList(tempList);
        console.log(reviewList);
    },[sort,isSortReverse])

    useEffect(()=>{
        console.log("review list updated");
    })


   /* useEffect(()=>{
        if(sort=="rating"){
            console.log("RATE");
        }
        else{
            console.log("DATE");
        }

    },[sort])
    */

    function sortDateClick()
    {
        setSort("Date posted");
        setIsSortReverse(!isSortReverse);
        console.log("DATE CLICKED " + isSortReverse);
    }

    function sortRatingClick()
    {
        setSort("User rating");
        setIsSortReverse(!isSortReverse);
        console.log("USER CLICKED " + isSortReverse);
    }

    function directionDate(){
        if(sort=="Date posted")
        {
            if(isSortReverse){
                return <span> ↓</span>;
            }
            else{
                return <span> ↑</span>;
            }
        }
        else
            return null;
    }

    function directionRate(){
        if(sort=="User rating"){
            if(isSortReverse){
                return <span> ↓</span>;
            }
            else{
                return <span> ↑</span>;
            }
        }
        else
            return null;
    }

    return (
        <div className='content-store-review'>
            <span id='store-review-title'>LOCAL STORE REVIEWS</span>
            <div id='store-review-header'>
                <Link id='store-review-post-button' to={'/StoreReviewPost'} >
                    <span>Post a Review</span>
                </Link>
            </div>

            <div id='store-review-container'>
                <div id='store-review-search-container'>
                    <input type={"search"} id='store-review-search' placeholder='Search...'></input>
                    <button id = 'store-review-search-button'>Search</button>
                </div>
            
                <div id='store-review-sort-right'>
                    <div className='store-review-sort-button' onClick={sortDateClick}>
                        <span>Date Posted</span>
                        {directionDate()}
                    </div>
                    <div className='store-review-sort-button' onClick={sortRatingClick}>
                        <span >User Rating</span>
                        {directionRate()}
                    </div>
                </div>
            </div>
            {reviewList}
        </div> 

    );
}

export default StoreReview;