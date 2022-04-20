import React, { createContext } from 'react';

const UserContext = createContext({
    isLoggedIn: false, setIsLoggedIn: ()=>({}),
    username: "",   setUsername: ()=>({}),
    profilePic: "", setProfilePic: ()=>({})
    });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;