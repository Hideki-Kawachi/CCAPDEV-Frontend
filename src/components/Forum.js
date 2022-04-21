import React from 'react';
import ForumBar from "./ForumBar.js";
const Forum = () => {
    return(
      
        <div className='content-forum'>
        <br></br>
         <div className="search-bar">
            <input type={"search"} id='post-search' placeholder='Search a post...'></input>
                <button id = 'post-search-button'>Search</button>
             </div>
        <br></br>
         <br></br>
        <div className = "post-header"><h2 className = "post-header-text"> Posts</h2></div>
        <ul>
                <ForumBar Title="Is this build good enough?" Text = "2 hours ago"/>
                <ForumBar Title="Are two fans enough?" Text = "30 minutes ago"/>
                <ForumBar Title="My PC's CPU exploded :( Any suggestions?" Text = "4/18/2022"/>
                <ForumBar Title="GPU prices are in an All-Time-High" Text = "4/18/2022"/>
                <ForumBar Title="Any recommendations for a P40k budget PC build?" Text = "4/18/2022"/>
        </ul>
    
        </div>
    );
}

export default Forum;