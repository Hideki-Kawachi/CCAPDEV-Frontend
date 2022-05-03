import React, { createContext } from 'react';

const CommentContext = createContext({comment: [{ username: "",   setUsername: ()=>({}),
date: new Date(), setDate: ()=>({}),
comments: "", setComments: ()=>({}),
upvote: 0, setUpvote: ()=>({})}]
    });

export const CommentProvider = CommentContext.Provider;
export const CommentConsumer = CommentContext.Consumer;

export default CommentContext;