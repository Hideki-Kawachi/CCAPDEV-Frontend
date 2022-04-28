import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function StoreReviewBar(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datePosted, setDatePosted] = useState(new Date());
    const [dateShow, setDateShow] = useState("");
    const [rating, setRating] = useState(1);
    const [user, setUser] = useState("");
    
    const currentDate = new Date();
    let finalDate;

    useEffect(()=>{
        setDatePosted(props.date);
        setTitle(props.title);
        setDescription(props.description);
        setRating(props.rating);
        setUser(props.user);
    });


    useEffect(()=>{
        if(currentDate.getFullYear()===datePosted.getFullYear()){
            if(currentDate.getMonth()===datePosted.getMonth()){
                if(currentDate.getDate()===datePosted.getDate()){
                    if(currentDate.getHours()===datePosted.getHours()){
                        if(currentDate.getMinutes()===datePosted.getMinutes()){
                            finalDate = currentDate.getSeconds() - datePosted.getSeconds();
                            if(finalDate==1)
                                setDateShow(finalDate + " second ago");
                            else
                                setDateShow(finalDate + " seconds ago");
                        }
                        else{
                            finalDate = currentDate.getMinutes() - datePosted.getMinutes();
                            if(finalDate==1)
                                setDateShow(finalDate + " minute ago");
                            else
                                setDateShow(finalDate + " minutes ago");
                        }
                        
                    }
                    else{
                        finalDate = currentDate.getHours() - datePosted.getHours();
                        if(finalDate==1)
                            setDateShow(finalDate + " hour ago");
                        else
                            setDateShow(finalDate + " hours ago");
                    }
                    
                }
                else{
                    finalDate = currentDate.getDate() - datePosted.getDate();
                    if(finalDate==1)
                        setDateShow(finalDate + " day ago");
                    else
                        setDateShow(finalDate + " days ago");
                }
                
            }
            else{
                finalDate = datePosted.toDateString().substring(4);
                setDateShow(finalDate);
            }
        }
        else{
            finalDate = datePosted.toDateString().substring(4);
            setDateShow(finalDate);
        }
        
    },[currentDate]);
    

    return (  
        <div className='store-review-bar-container'>
            <div className='store-review-bar-left'>
                <Link className='store-review-bar-top-container' to={'/StoreReviewView'} state={{title: title, description: description, date: dateShow, user: user, rating: rating}}>
                    <span className='store-review-bar-title'>{title}</span>
                    <span className='store-review-bar-user'>by: {user}</span>
                </Link>
                <hr className='store-review-bar-line'></hr>
                <div className='store-review-bar-description-container'>
                    <span className='store-review-bar-description'>{description}</span>
                </div>
            </div>
            <div className='store-review-bar-right'>
                <span className='store-review-bar-date'>{dateShow}</span>
                <div className='store-review-bar-rating'>
                    <StarRating rating = {rating}></StarRating>
                </div>
            </div>
        </div>
    );
}

export default StoreReviewBar;