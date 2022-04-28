import React from 'react';
import ForumBar from "./ForumBar.js";
const Forum = () => {
    return(
      
        <div className='content-forum'>
        <br></br>
        <div className = "post-header"><p className = "post-header-text"> FORUMS </p></div>
        
        <br></br><br></br>
         <div className="post-search-bar">
            <input type={"search"} id='post-search' placeholder='Search a post...'></input>
                <button id = 'post-search-button'>Search</button>
             </div>
    
        <ul>
                <ForumBar Title="Is this build good enough?" Text = "by Hidekiii"/>
                <ForumBar Title="Are two fans enough?" Text = "By lol12345"/>
                <ForumBar Title="My PC's CPU exploded :( Any suggestions?" Text = "by BennyBouken"/>
                <ForumBar Title="GPU prices are in an All-Time-High" Text = "by ElonStoinks"/>
                <ForumBar Title="Any recommendations for a P40k budget PC build?" Text = "byCarloC"/>
        </ul>
    
        </div>
    );
}

export default Forum;