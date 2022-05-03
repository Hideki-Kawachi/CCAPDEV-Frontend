import React, { useState, useEffect, useContext } from 'react';
import PostContext from './context/PostContext';
import ForumBar from "./ForumBar";
import ForumComment from "./ForumComment";

const Forum = () => {
    let tempList=[];

    let comment1Post1 = new forumComment("THIS IS A COMMENTKLSAJDLKASJLK", "usrerer", new Date('April 28, 2022 15:47:00'), 2);
    let comment2Post1 = new forumComment("2ND COMMENT HERE", "uSERrrr", new Date('April 28, 2022 15:47:00'), 5);
    let commentListPost1 = new Array(comment1Post1,comment2Post1);

    let forumPost1 = new forumPost("Is this build good enough????dsa", "Rate My Build", "Hideki1", new Date('April 28, 2022 15:47:00'), "DESCRIPTION ASHDJKASHKJDA", 5, commentListPost1,"");
    let forumPost2 = new forumPost("Is this build good enough??sada", "Rate My Build", "Hidekidsadii2", new Date('April 22, 2022 15:47:00'), "DESCRIasdsadsaPTION ASHDJKASHKJDA", 2, commentListPost1,"");
    let forumPost3 = new forumPost("Is this build good enough??????asd", "Rate My Build", "Hidekasiii3", new Date('April 25, 2022 15:47:00'), "DESCRIN ASHDJKASHKJDA", 10, commentListPost1,"");
    let forumPost4 = new forumPost("Is this build good enough??dsad", "Rate My Build", "Hidddekiii4", new Date('April 24, 2022 15:47:00'), "DESCRIPTIsdaON ASHDJKASHKJDA", 4, commentListPost1,"");
    let forumPost5 = new forumPost("Is this build good enough????????????asdas", "Rate My Build", "Hidekaasiii5", new Date('April 23, 2022 15:47:00'), "DESCRI ASHDJKASHKJDA", 2, commentListPost1,"");

    const [sort, setSort] = useState("Date posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [postList, setPostList] = useState([]);
    const [posts, setPosts] = useState([forumPost1,forumPost2,forumPost3,forumPost4,forumPost5]);

    const postContext = useContext(PostContext);

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
        if(postContext.postTitle.length>0 && postContext.postDescription.length>0 && postContext.postUsername.length>0){
            setPosts(oldPosts=>[new forumPost(postContext.postTitle, postContext.flair, postContext.postUsername, postContext.postDate, postContext.postDescription,  postContext.postUpvotes, postContext.postComments, postContext.postMedia ),...oldPosts])
        }
    },[postContext]);

    useEffect(()=>{
        tempList = [];
            posts.forEach((post,index)=>{
                //console.log("Forum Comments" + post.comments[1].comment);
                tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
            })
            setPostList(tempList);
    },[posts])

    useEffect(()=>{
        if(sort=="Date posted")
        {
            if(!isSortReverse){
                posts.sort((a, b)=>b.date - a.date);
            }
            else{
                posts.sort((a, b)=>a.date - b.date);
            }
        }
        else{
            if(!isSortReverse){
                posts.sort((a, b)=>b.upvotes - a.upvotes);
            }
            else{
                posts.sort((a, b)=>a.upvotes - b.upvotes);
            }
        }
        tempList = [];
            posts.forEach((post,index)=>{
                //console.log("Forum Comments" + post.comments[1].comment);
                tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
            })
            setPostList(tempList);
        console.log("SET");
    },[sort,isSortReverse])

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
            </div>
        </div>
    );
}

export default Forum;