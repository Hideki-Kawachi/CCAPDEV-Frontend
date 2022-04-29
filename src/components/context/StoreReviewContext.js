import React, { createContext } from 'react';

const StoreReviewContext = createContext({
    title: "", setTitle: ()=>({}),
    username: "",   setUsername: ()=>({}),
    date: "", setDate: ()=>({}),
    rating: 0, setRating: ()=>({}),
    description: "", setDescription: ()=>({})
    });

export const StoreReviewProvider = StoreReviewContext.Provider;
export const StoreReviewConsumer = StoreReviewContext.Consumer;

export default StoreReviewContext;