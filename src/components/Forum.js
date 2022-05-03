import React, { useState, useEffect, useContext } from 'react';
import PostContext from './context/PostContext';
import ForumBar from "./ForumBar";
import ForumComment from "./ForumComment";

const Forum = () => {
    let tempList=[];

    let comment1Post1 = new forumComment("THIS IS A COMMENTKLSAJDLKASJLK", "usrerer", "April 29, 2022", 2);
    let comment2Post1 = new forumComment("2ND COMMENT HERE", "uSERrrr", "April 30, 2022", 5);
    let commentListPost1 = [comment1Post1,comment2Post1];

    let forumPost1 = new forumPost("Is this build good enough?", "Rate My Build", "Hidekiii", "April 27, 2022", "DESCRIPTION ASHDJKASHKJDA", 5, [commentListPost1]);
    let forumPost2 = new forumPost();
    let forumPost3 = new forumPost();
    let forumPost4 = new forumPost();
    let forumPost5 = new forumPost();

    const [sort, setSort] = useState("Date posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [postList, setPostList] = useState([]);
    const [posts, setPosts] = useState([forumPost1,forumPost2,forumPost3,forumPost4,forumPost5]);

    const forumPostContext = useContext(PostContext);

    function forumPost(title, flair, username, date, description, upvotes, comments, media){
        this.title = title;
        this.flair = flair;
        this.description = description;
        this.date = date;
        this.upvotes = upvotes;
        this.username = username;
        this.comments = comments;
        this.media = media;
    }

    function forumComment(comment, username, date, upvotes){
        this.comment = comment;
        this.username = username;
        this.date = date;
        this.upvotes = upvotes;
    }

    useEffect(()=>{
        if(forumPostContext.title.length>0 && forumPostContext.description.length>0 && forumPostContext.username.length>0){
            setPosts(oldPosts=>[new forumPost(forumPostContext.title, forumPostContext.description, forumPostContext.date, forumPostContext.rating, forumPostContext.username),...oldPosts])
        }
    },[forumPostContext]);

    useEffect(()=>{
        tempList = [];
            posts.forEach((post,index)=>{
                tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
            })
            setPostList(tempList);
            console.log("SET");
    },[posts])

    function sortDateClick()
    {
        setSort("Date posted");
        setIsSortReverse(!isSortReverse);
        console.log("DATE CLICKED " + isSortReverse);
    }

    function sortUpvoteClick()
    {
        setSort("User upvote");
        setIsSortReverse(!isSortReverse);
        console.log("USER CLICKED " + isSortReverse);
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

    function directionUpvote(){
        if(sort=="User upvote"){
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


    return(
      
        <div className='content-forum'>
        <br></br>
        <div className = "post-header"><p className = "post-header-text"> FORUMS AND DISCUSSIONS </p></div>
        
        <br></br><br></br><br></br><br></br><br></br>
        <div className  ="store-review-container">
            
            <div id='store-review-search-container'>
                <input type={"search"} id='store-review-search' placeholder='Search a post...'></input>
                <button id = 'store-review-search-button'>Search</button>
            </div>

             <div id='forum-sort-right'>
                <div className='forum-sort-button' onClick={sortDateClick}>
                    <span>Date Posted</span>
                    {directionDate()}
                </div>
                <div className='forum-sort-button' onClick={sortUpvoteClick}>
                    <span >Upvotes</span>
                    {directionUpvote()}
                </div>
            </div>
                {postList}
                <ForumBar Title="Is this build good enough?" username= "Hidekiii" Flair = "Rate My Build" datePosted = "April 27, 2022" Upvotes = "5" commentCount = "0" comments = {[]}/>
                <ForumBar Title="Are two fans enough?" username = "lol12345" Flair = "Build Suggestions" datePosted = "April 27, 2022" Upvotes = "11" commentCount = "0"/>
                <ForumBar Title="My PC's CPU exploded :( Any suggestions?" username= "BennyBouken" Flair = "Tips and Tricks" datePosted = "April 27, 2022" Upvotes = "3" commentCount = "0"/>
                <ForumBar Title="GPU prices are in an All-Time-High" username = "ElonStoinks" Flair = "General Discussions and Trends" datePosted = "April 27, 2022" Upvotes = "2" commentCount = "0"/>
                <ForumBar Title="Any recommendations for a P40k budget PC build?" username = "CarloC" Flair = "Tips and Tricks" datePosted = "April 27, 2022" Upvotes = "0" commentCount = "0"/>
            </div>
        </div>
    );
}

export default Forum;