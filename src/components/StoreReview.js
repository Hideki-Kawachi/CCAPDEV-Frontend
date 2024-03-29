import React, { useEffect, useState, useContext } from 'react';
import StoreReviewBar from './StoreReviewBar';
import { Link } from 'react-router-dom';
import Login from './Login';
import UserContext from './context/UserContext';
import StoreReviewContext from './context/StoreReviewContext';

function StoreReview() {
    let tempList=[];
    /*
    let reviewPost1 = new reviewPost("PC EXPRESS", "Great shop, flawless customer service but there are too many customers", new Date('April 28, 2022 15:47:00'), 4, "Hideki123");
    let reviewPost2 = new reviewPost("PC CORNER", "Product availability is a bit rough and staff are underprepared", new Date('April 25, 2022 14:32:00'), 3, "CarloC");
    let reviewPost3 = new reviewPost("Desktop Workshop", "This shop is good! Excellent service.", new Date('Febuary 22, 2022 2:45:00'), 5, "MartinA");
    let reviewPost4 = new reviewPost("PC Gilmore", "Superrrrr crowded. Will not go again", new Date('January 24, 2022 15:40:00'), 2, "GinoGGG");
    let reviewPost5 = new reviewPost("EasyPc", "Great online service.  Fast delivery and cheap prices.  A win for me!", new Date('December 25, 2021 23:31:00'), 4, "SirN");
    let reviewPost6 = new reviewPost("Eazzy", "This shop is bad...I don't know what else to say", new Date('October 12, 2020 23:31:00'), 2, "SirN");
    let reviewPost7 = new reviewPost("Octagon", "You will find everything you need here.  Will definitely go again", new Date('January 25, 2021 23:31:00'), 5, "SirN");
    */

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Date posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [reviewList, setReviewList] = useState([]);
    const [reviews, setReviews] = useState([]);
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
        fetch("https://pcguro-backend.herokuapp.com/PStoreReview",{
            method: "GET"
        }).then(res=>res.json())
        .then(data=>{
            data.forEach((review, index) => {
                setReviews(oldReviews=>[new reviewPost(review.title, review.description, review.date, review.rating, review.username),...oldReviews]);
            });
        })
    },[])

    useEffect(()=>{
        if(storeReview.reviewTitle.length>0 && storeReview.reviewDescription.length>0 && storeReview.reviewUsername.length>0){
            setReviews(oldReviews=>[new reviewPost(storeReview.reviewTitle, storeReview.reviewDescription, storeReview.reviewDate, storeReview.rating, storeReview.reviewUsername),...oldReviews])
        }
    },[storeReview]);

    useEffect(()=>{
        if(sort=="Date posted")
        {
            if(!isSortReverse){
                reviews.sort((a, b)=>new Date(b.date) - new Date(a.date));
            }
            else{
                reviews.sort((a, b)=>new Date(a.date) - new Date(b.date));
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
    },[sort,isSortReverse])

    useEffect(()=>{
        tempList = [];
            reviews.forEach((review,index)=>{
                tempList.push(<StoreReviewBar key={index} title={review.title} description={review.description} date={review.date} rating={review.rating} username={review.username}></StoreReviewBar>)
            })
            setReviewList(tempList);
    },[reviews])

    function sortDateClick()
    {
        setSort("Date posted");
        setIsSortReverse(!isSortReverse);
    }

    function sortRatingClick()
    {
        setSort("User rating");
        setIsSortReverse(!isSortReverse);
    }

    function directionDate(){
        if(sort=="Date posted")
        {
            if(!isSortReverse){
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
            if(!isSortReverse){
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
            <div className='store-review-header'>
                <Link id='store-review-post-button' to={'/StoreReviewPost'}>
                <span>Post a Review</span>
                </Link>
            </div>
            
        ),
        false:(
            <div className='store-review-header'>
                <a id='store-review-post-button'onClick={()=>setIsLoggedOpen(true)}>Post a Review</a>
            </div>
            
        )
    }

    const openLogin={
        true:(
            <Login setIsLoggedOpen = {setIsLoggedOpen} isLoggedOpen = {isLoggedOpen}></Login>
        )
    }

    function reviewSearch(){

        let searchName = document.querySelector('#store-review-search').value

        reviews.forEach((review,index)=>{

            //console.log( (post.title.toLowerCase()).substr(0, searchName.length) );

            if( (review.title.toLowerCase()).search(searchName.toLowerCase()) != -1){
                tempList.push(<StoreReviewBar key={index} title={review.title} description={review.description} date={review.date} rating={review.rating} username={review.username}></StoreReviewBar>)
            }
            else if (searchName == ""){
                tempList.push(<StoreReviewBar key={index} title={review.title} description={review.description} date={review.date} rating={review.rating} username={review.username}></StoreReviewBar>)
            }
            setReviewList(tempList);
        })

    }

    return (
        <div className='content-store-review'>
            {openLogin[isLoggedOpen]}
            <div className='store-review-main'>
                <span id='store-review-title'>LOCAL STORE REVIEWS</span>
                {buttonRoute[user.isLoggedIn]}

                <div id='store-review-container'>
                    <div id='store-review-search-container'>
                        <input type={"search"} id='store-review-search' placeholder='Search...' onChange={reviewSearch}></input>
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
        </div> 

    );
}

export default StoreReview;