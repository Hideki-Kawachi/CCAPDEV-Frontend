import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PostContext from './context/PostContext';
import ForumBar from "./ForumBar";

const Forum = () => {
    let tempList=[];

    let comment1Post1 = new forumComment("If you’re coming from the 2019 i9 MBP I feel for you, those things are nut roasters :D What software do you use for editing OP? That’ll play a factor.", "BrownKeycappin", new Date('April 28, 2022 15:47:00'), 2);
    let comment2Post1 = new forumComment("I think a GPU upgrade to something like a 5700XT would serve you well if you wanna go 1440p ultrawide. That should be enough", "PerpMan123", new Date('April 28, 2022 15:47:00'), 5);
    let commentListPost1 = new Array(comment1Post1,comment2Post1);

    let forumPost1 = new forumPost("Is this build good enough?", "Rate My Build", "Hideki1", new Date('April 28, 2022 15:47:00'), "Here's the current build:\n\n Asus z690 Wi-Fi prime motherboard\n 2x16 32 gb of Corsair vengeance ddr5\n 240mm msi aio\n intel i7 12700k cpu\n evga 3070 ti ftw\n 1tb each of m.2 Samsung and wd for os and games.\n Case Corsair 4000d\n\n Currently I really only play Minecraft and Genshin Impact very often. Otherwise it's a Twitch/Netflix/Reddit machine. I've been thinking of upgrading to a 4K monitor or 1400p ultrawide.(so I can sneak the current ultrawide into work and use it there)", 5, commentListPost1,"");
    let forumPost2 = new forumPost("Frame Stuttering issues suddenly pop up!", "Technical Issues", "AzureMoon13", new Date('April 22, 2022 15:47:00'), "Hey, I have an issue with games that used to run with easily 70 fps. However, now it hardly runs at 30fps. I’ve been experiencing this issue in games like Sea of Thieves, Batman: Arkham Knight and Genshin Impact. These games worked normally 2 months ago  but now I have been experiencing a ton of lag and frame stutterings and I have absolutely no idea why… I updated drivers and what not but still the same problem. Any clue on what’s causing this and how can I fix it?", 2, commentListPost1,"");
    let forumPost3 = new forumPost("Upgrade my current build", "Build Suggestions", "HTannyPie", new Date('April 25, 2022 15:47:00'), "Hello, I am new to this forum and want to ask for your suggestions. Here is my current build:\n\n CPU: AMD Ryzen 5 1600\n GPU: NVIDIA GeForce GTX 1060\n  RAM: 16GB\n\n The performance of my PC is fine, although I do experience games crashing while I play them and CPU temperature reaches 80-90 degrees. When performing the usual tasks for school, my PC gets a bit slow. I currently have a budget of around 30,000 pesos to upgrade my build. Your suggestions would be appreciated. Thanks!", 8, commentListPost1,"");
    let forumPost4 = new forumPost("New install of Windows 10 and missing drivers?", "Tips and Tricks", "genesheehee", new Date('April 24, 2022 15:47:00'), "Yo, so you’ve just completed a new install of Windows 10 on your new PC, did the required updates, but you go into Device Manager and see that the drivers that should have been installed with the updates, are not. Just do the update again and click on “Optional Updates”, then “Hardware Updates”. In almost all cases, the missing drivers will be there. For whatever reason, hardware that doesn’t have a driver at all, shows up as optional updates in Windows.", 4, commentListPost1,"");
    let forumPost5 = new forumPost("Consider undervolting your GPU.", "General Discussion and Trends", "Cotriii", new Date('April 23, 2022 15:47:00'), "Modern cards keep trying to boost as high as possible, generate a bunch of unnecessary heat, ramp the fans up to dissipate that heat, and end up clocking down slightly when they heat up to equilibrium.With a modest undervolt the performance of your GPU should not change significantly (provided you don't overdo it), and you can significantly reduce heat output by reducing power draw, which in turn makes your fans spin slower, which means a quieter card.TL;DR: Lower power draw = less heat generated = lower fan RPM = less noise. Take 20-30 minutes to dial in a stable undervolt", 2, commentListPost1,"");
    let forumPost6 = new forumPost("GPU update for April 2022.", "News", "waka8888", new Date('May 23, 2020 15:47:00'), "There are no new GPU launches for this month after a bit of activity like the RTX 3050 and RX 6500 XT releases from Nvidia and AMD, respectively. There are however a few upcoming products, hopefully by the end of this year.The GeForce RTX 3090 was announced back at CES, but hasn’t materialized just yet. We’re expecting to hear more about that shortly. On the AMD side, there are rumors of a mid-cycle RDNA2 refresh before RDNA3 launches.", 1, commentListPost1,"");


    const [sort, setSort] = useState("Date posted");
    const [isSortReverse, setIsSortReverse] = useState(false);
    const [postList, setPostList] = useState([]);
    const [posts, setPosts] = useState([]); //forumPost1,forumPost2,forumPost3,forumPost4,forumPost5,forumPost6
    const [flairFilter, setFlairFilter] = useState("");

    const postContext = useContext(PostContext);
    const info = useLocation();

    function forumPost(title, flair, username, date, description, upvotes, comments){
        this.title = title;
        this.flair = flair;
        this.description = description;
        this.date = date;
        this.upvotes = upvotes;
        this.username = username;
        this.comments = comments;
        //this.media = media;
    }

    function forumComment(comment, username, date, upvotes){
        this.comment = comment;
        this.username = username;
        this.date = date;
        this.upvotes = upvotes;
    }

    useEffect(()=>{     //listing post to display
        fetch("/PForum",{
            method: "GET"
        }).then(res=>res.json())
        .then(data=>{   
        data.forEach((post,index)=>{
                //console.log("Forum Comments" + post.comments[1].comment);
                setPosts(oldPosts=>[new forumPost( post.title, post.flair, post.description, post.date, post.upvotes, post.username, post.comments),...oldPosts])
            });
        })
    },[])

    useEffect(()=>{     //post appending
        if(postContext.postTitle.length>0 && postContext.postDescription.length>0 && postContext.postUsername.length>0){
            setPosts(oldPosts=>[new forumPost(postContext.postTitle, postContext.flair, postContext.postUsername, postContext.postDate, postContext.postDescription,  postContext.postUpvotes, postContext.postComments, postContext.postMedia ),...oldPosts])
        }
    },[postContext]);



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
                if(post.flair==flairFilter){
                    tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments} media={post.media}></ForumBar>)
                }
                else if(flairFilter==""){
                    tempList.push(<ForumBar key={index} title={post.title} flair={post.flair} username={post.username} date={post.date} description={post.description} upvotes={post.upvotes} comments={post.comments}></ForumBar>)
                }
            })
            setPostList(tempList);
    },[sort,isSortReverse,flairFilter])

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
                <input type={"search"} id='store-review-search' placeholder='Search a post...'></input>
                <button id = 'store-review-search-button'>Search</button>
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