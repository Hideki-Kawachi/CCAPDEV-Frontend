import React, { createContext } from 'react';

const PostContext = createContext({
    title: "", setTitle: ()=>({}),
    username: "",   setUsername: ()=>({}),
    date: "", setDate: ()=>({}),
    description: "", setDescription: ()=>({}),
    media: "", setMedia: ()=>({})
    });

export const PostProvider = PostContext.Provider;
export const PostConsumer = PostContext.Consumer;

export default PostContext;