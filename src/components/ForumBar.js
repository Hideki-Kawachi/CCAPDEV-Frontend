import React from 'react';

const ForumBar = (props) => {
    return(
            <div className ="row">   
                <li>
                <a href="./Post.js"> 
                
                <h4 class = "post-title"> {props.Title} </h4>
                </a>
                <div class ="post-bottom">
                    <p class ="post-title-text">{props.Text}</p>
                    
                </div>
                
                </li>
            </div>
    );
}

const UpVote = (props) => {
    return(
    <figure display = "inline-block" float = "left" margin = "auto"> 
        <img className="icon" src={require('../media/upvote-icon.png')} alt="pic" />
        <figcaption> 1 </figcaption>
    </figure>
   
    );
}

export default ForumBar;