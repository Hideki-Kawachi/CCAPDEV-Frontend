import React, { useEffect, useState, useContext, useRef } from 'react';
import StoreReviewBar from './StoreReviewBar';
import { Link } from 'react-router-dom';
import Login from './Login';
import UserContext from './context/UserContext';
import StoreReviewContext from './context/StoreReviewContext';

function StoreReview() {
    let tempList=[];
    let reviewPost1 = new reviewPost("PC EXPRESS", "This shop is good! Excellent service.", new Date('April 28, 2022 15:47:00'), 4, "Hideki123");
    let reviewPost2 = new reviewPost("PC CORNER", "This shop is good! Excellent service.", new Date('April 25, 2022 14:32:00'), 3, "CarloC");
    let reviewPost3 = new reviewPost("Desktop Workshop", "This shop is good! Excellent service.", new Date('Febuary 22, 2022 2:45:00'), 5, "MartinA");
    let reviewPost4 = new reviewPost("PC Gilmore", "This shop is good! Excellent service.", new Date('January 24, 2022 15:40:00'), 2, "GinoGGG");
    let reviewPost5 = new reviewPost("EasyPc", "This shop is good! Excellent service.", new Date('December 25, 2021 23:31:00'), 4, "SirN");

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Date posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [reviewList, setReviewList] = useState([]);
    const [reviews, setReviews] = useState([reviewPost1,reviewPost2,reviewPost3,reviewPost4,reviewPost5]);
    const [isLoggedOpen, setIsLoggedOpen] = useState(false);

    const user = useContext(UserContext);

    const storeReview = useContext(StoreReviewContext);

    function reviewPost(title, description, date, rating, username){
        this.title = title;
        this.description = description;
        this.date = date;
        this.rating = rating;
        this.username = username;
    }

    
    
    useEffect(()=>{
        if(storeReview.title.length>0 && storeReview.description.length>0 && storeReview.username.length>0){
            setReviews(oldReviews=>[new reviewPost(storeReview.title, storeReview.description, storeReview.date, storeReview.rating, storeReview.username),...oldReviews])
        }
    },[storeReview]);

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
            tempList.push(<StoreReviewBar key={index} title={review.title} description={review.description} date={review.date} rating={review.rating} username={review.username}></StoreReviewBar>)
        })
        setReviewList(tempList);
        console.log("SET");
    },[sort,isSortReverse])

    useEffect(()=>{
        tempList = [];
            reviews.forEach((review,index)=>{
                tempList.push(<StoreReviewBar key={index} title={review.title} description={review.description} date={review.date} rating={review.rating} username={review.username}></StoreReviewBar>)
            })
            setReviewList(tempList);
            console.log("SET");
    },[reviews])

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

    const buttonRoute = {
        true:(
            <Link id='store-review-post-button' to={'/StoreReviewPost'}>
                <span>Post a Review</span>
            </Link>
        ),
        false:(
            <>
            <a id='store-review-post-button'onClick={()=>setIsLoggedOpen(true)}>Post a Review</a>
            <Login setIsLoggedOpen = {setIsLoggedOpen} isLoggedOpen = {isLoggedOpen}></Login>
            </>
            
        )
    }

    return (
        <div className='content-store-review'>
            <span id='store-review-title'>LOCAL STORE REVIEWS</span>
            <div id='store-review-header'>
                {buttonRoute[user.isLoggedIn]}
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