import React from 'react';

const ForumBar = (props) => {
    return(
      
            <li class = "row">
                <a href="Post.js">
                <h2 class = "post-title"> Post 1 </h2>
                <div class ="post-bottom">
                    <p class ="post-title-text">2 hours ago</p>
                </div>
                </a>
            </li>
    );
}

export default ForumBar;