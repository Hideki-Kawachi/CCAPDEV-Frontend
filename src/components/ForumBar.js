import React from 'react';

const ForumBar = (props) => {
    return(
            <div className ="row">   
                <li>
                <a href="./Post.js"> 
                <h4 class = "post-title"> {props.Title} </h4>
                <div class ="post-bottom">
                    <p class ="post-title-text">{props.Text}</p>
                </div>
                </a>
                </li>
            </div>
    );
}

export default ForumBar;