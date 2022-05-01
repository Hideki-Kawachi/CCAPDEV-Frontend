import React from 'react';
import ForumBar from "./ForumBar";

const Forum = () => {
    let forumPost1 = new forumPost();
    let forumPost2 = new forumPost();
    let forumPost3 = new forumPost();
    let forumPost4 = new forumPost();
    let forumPost5 = new forumPost();





    function forumPost(title, description, date, rating, username){
        this.title = title;
        this.description = description;
        this.date = date;
        this.rating = rating;
        this.username = username;
    }


    return(
      
        <div className='content-forum'>
        <br></br>
        <div className = "post-header"><p className = "post-header-text"> FORUMS AND DISCUSSIONS </p></div>
        
        <br></br><br></br><br></br><br></br><br></br>
        <div classname  ="forum-body">
            <input type={"search"} id='post-search' placeholder='Search a post...'></input>
             <button id = 'post-search-button'>Search</button>

             <div id='store-review-sort-right'>
                    <div className='store-review-sort-button'>
                        <span>Date Posted</span>
                        </div>
                    <div className='store-review-sort-button'>
                        <span >Upvotes <img className="icon" src='./images/upvote-icon.png' alt="Up"/></span>
                    </div>
                </div>
                    
         
        
                <ForumBar Title="Is this build good enough?" username= "Hidekiii" Flair = "Rate My Build" datePosted = "April 27, 2022" Upvote = "5"/>
                <ForumBar Title="Are two fans enough?" username = "lol12345" Flair = "Build Suggestions" datePosted = "April 27, 2022" Upvote = "5"/>
                <ForumBar Title="My PC's CPU exploded :( Any suggestions?" username= "BennyBouken" Flair = "Tips and Tricks" datePosted = "April 27, 2022" Upvote = "5"/>
                <ForumBar Title="GPU prices are in an All-Time-High" username = "ElonStoinks" Flair = "General Discussions and Trends" datePosted = "April 27, 2022" Upvote = "5"/>
                <ForumBar Title="Any recommendations for a P40k budget PC build?" username = "byCarloC" Flair = "Tips and Tricks" datePosted = "April 27, 2022" Upvote = "5"/>
            </div>
        </div>
    );
}

export default Forum;