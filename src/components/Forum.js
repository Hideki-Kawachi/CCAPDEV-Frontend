import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PostContext from './context/PostContext';
import ForumBar from "./ForumBar";

const Forum = () => {
    let tempList=[];

    const [sort, setSort] = useState("Date posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [postList, setPostList] = useState([]);
    const [posts, setPosts] = useState([]);
    const [flairFilter, setFlairFilter] = useState("");

    const postContext = useContext(PostContext);
    const info = useLocation();

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
        fetch("https://pcguro-backend.herokuapp.com/PForum",
        {
            method: "GET"
        }).then(res=>res.json())
        .then(data=>{
            data.forEach((post,index)=>{
                setPosts(oldPosts=>[new forumPost(post.title, post.flair, post.username, new Date(post.date), post.description,  post.upvotes, post.comments, post.media ),...oldPosts])
                tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={new Date(post.date)} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
            })
            setPostList(tempList);
        })

    },[])
/*
    useEffect(()=>{     //post appending
        if(postContext.postTitle.length>0 && postContext.postDescription.length>0 && postContext.postUsername.length>0){
            setPosts(oldPosts=>[new forumPost(postContext.postTitle, postContext.flair, postContext.postUsername, postContext.postDate, postContext.postDescription,  postContext.postUpvotes, postContext.postComments, postContext.postMedia ),...oldPosts])
        }
    },[postContext]);
*/


    useEffect(()=>{
        if(sort=="Date posted")
        {
            if(!isSortReverse){
                posts.sort((a, b)=>new Date(b.date) -  new Date(a.date));
            }
            else{
                posts.sort((a, b)=>new Date(a.date) -  new Date(b.date));
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
                if(post.flair==flairFilter){
                    tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
                }
                else if(flairFilter==""){
                   tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments}></ForumBar>)
                }

            })
            setPostList(tempList);
    },[sort,isSortReverse,flairFilter,posts])

    function sortDateClick()
    {
        setSort("Date posted");
        setIsSortReverse(!isSortReverse);
    }

    function sortUpvoteClick()
    {
        setSort("User upvote");
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

    function postsSearch(){

        let searchName = document.querySelector('#store-review-search').value

        posts.forEach((post,index)=>{

            //console.log( (post.title.toLowerCase()).substr(0, searchName.length) );

            if( (post.title.toLowerCase()).search(searchName.toLowerCase()) != -1){
                tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
            }
            else if (searchName == ""){
                tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
            }
            setPostList(tempList);
        })

    }

    useEffect(()=>{
        if(info.state!=null){
            setFlairFilter(info.state);
        }
    },[info.state])


    return(
      
        <div className='content-forum'>
        <br></br>
        <div className = "post-header"><p className = "post-header-text"> FORUMS AND DISCUSSIONS </p></div>
        
        <br></br><br></br><br></br><br></br><br></br>
        <div className  ="store-review-container">
            
            <div id='store-review-search-container'>
                <input type={"search"} id='store-review-search' placeholder='Search a post...' onChange={postsSearch}  ></input>
                <button id = 'store-review-search-button' onClick={postsSearch}>Search</button>
            </div>
            <select className='dropdown'id='flair' value={flairFilter} onChange={(e)=>setFlairFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Technical Issues">Technical Issues</option>
                <option value="Rate My Build">Rate My Build</option>
                <option value="Build Suggestions">Build Suggestions</option>
                <option value="Tips and Tricks">Tips and Tricks</option>
                <option value="General Discussion and Trends">General Discussion and Trends</option>
                <option value="News">News</option>
            </select>

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