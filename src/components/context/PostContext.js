import React, { createContext } from 'react';

const PostContext = createContext({
    title: "", setTitle: ()=>({}),
    flair: 0, setFlair: ()=>({}),
    username: "",   setUsername: ()=>({}),
    date: new Date(), setDate: ()=>({}),
    description: "", setDescription: ()=>({}),
    comments: [], setComments: ()=>({}),
    media: "", setMedia: ()=>({}),
    upvote: 0, setUpvote: ()=>({})
    });

export const PostProvider = PostContext.Provider;
export const PostConsumer = PostContext.Consumer;

export default PostContext;