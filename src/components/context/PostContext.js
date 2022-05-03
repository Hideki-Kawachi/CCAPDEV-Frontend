import React, { createContext } from 'react';

const PostContext = createContext({
    postTitle: "", setPostTitle: ()=>({}),
    flair: 0, setFlair: ()=>({}),
    postUsername: "",   setPostUsername: ()=>({}),
    postDate: new Date(), setPostDate: ()=>({}),
    postDescription: "", setPostDescription: ()=>({}),
    postComments: [], setPostComments: ()=>({}),
    postMedia: "", setPostMedia: ()=>({}),
    postUpvotes: 0, setPostUpvotes: ()=>({})
    });

export const PostProvider = PostContext.Provider;
export const PostConsumer = PostContext.Consumer;

export default PostContext;