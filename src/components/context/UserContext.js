import React, { createContext } from 'react';

const UserContext = createContext({
    isLoggedIn: false, setIsLoggedIn: ()=>({}),
    username: "",   setUsername: ()=>({}),
    profilePic: "/profilePictures/default.jpg", setProfilePic: ()=>({}),
    email: "", setEmail: ()=>({}),
    bio: "", setBio: ()=>({})
    });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;