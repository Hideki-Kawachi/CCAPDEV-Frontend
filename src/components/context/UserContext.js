import React, { createContext } from 'react';

const UserContext = createContext({
    isLoggedIn: false, setIsLoggedIn: ()=>({}),
    username: "",   setUsername: ()=>({}),
    profilePic: "/profilePictures/default.jpg", setProfilePic: ()=>({}),
    email: "", setEmail: ()=>({}),
    bio: "", setBio: ()=>({}),
    userBuilds: [{build: "", date: new Date(), cpu: "default---0",cpuCooler: "default---0", motherboard: "default---0", ram: "default---0", storage: "default---0", gpu: "default---0", pcCase: "default---0", powerSupply: "default---0", total: 0}], setUserBuilds: ()=>({})
    });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;