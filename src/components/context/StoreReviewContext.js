import React, { createContext } from 'react';

const StoreReviewContext = createContext({
    reviewTitle: "", setReviewTitle: ()=>({}),
    reviewUsername: "",   setReviewUsername: ()=>({}),
    reviewDate: "", setReviewDate: ()=>({}),
    rating: 0, setRating: ()=>({}),
    reviewDescription: "", setReviewDescription: ()=>({}),
    reviewMedia: "", setReviewMedia: ()=>({})
    });

export const StoreReviewProvider = StoreReviewContext.Provider;
export const StoreReviewConsumer = StoreReviewContext.Consumer;

export default StoreReviewContext;