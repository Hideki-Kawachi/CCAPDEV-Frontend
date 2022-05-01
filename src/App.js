import React, { useContext, useEffect, useState } from 'react';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Forum from "./components/Forum";
import PostCreate from "./components/PostCreate";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import index from './index.css'
import UserProfile from './components/UserProfile';
import UserContext, { UserProvider } from './components/context/UserContext';
import StoreReview from './components/StoreReview';
import StoreReviewView from './components/StoreReviewView';
import StoreReviewPost from './components/StoreReviewPost';
import StoreReviewContext, { StoreReviewProvider } from './components/context/StoreReviewContext';
import SystemBuilder from './components/SystemBuilder';
import { SystemBuilderProvider } from './components/context/SystemBuilderContext';
import { PostProvider } from './components/context/PostContext';

const App = () =>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState("/profilePictures/default.jpg");
    const [bio,setBio] = useState("This is the standard bio");
    const user = {isLoggedIn,setIsLoggedIn,username,setUsername,profilePic,setProfilePic,email,setEmail,bio,setBio};

    const [title,setTitle] = useState("");
    const [date,setDate] = useState(new Date());
    const [rating,setRating] = useState(0);
    const [description,setDescription] = useState("");
    const [media,setMedia] = useState("");
    const storeReview = {title,setTitle,username,setUsername,date,setDate,rating,setRating,description,setDescription,media,setMedia};

    const post = {title,setTitle,username,setUsername,date,setDate,description,setDescription,media,setMedia};

    const [build,setBuild] = useState("");
    const [cpu, setCpu] = useState("default---0");
    const [cpuCooler, setCpuCooler] = useState("default---0");
    const [motherboard, setMotherboard] = useState("default---0");
    const [ram, setRam] = useState("default---0");
    const [storage, setStorage] = useState("default---0");
    const [gpu, setGpu] = useState("default---0");
    const [pcCase, setPcCase] = useState("default---0");
    const [powerSupply, setPowerSupply] = useState("default---0");
    const [total, setTotal] = useState(0);
    const systemBuild = {build,setBuild,username,setUsername,date,setDate,cpu,setCpu,cpuCooler,setCpuCooler,motherboard,setMotherboard,ram,setRam,storage,setStorage,
                        gpu,setGpu,pcCase,setPcCase,powerSupply,setPowerSupply,total,setTotal};

    return(
        <Router>
            <UserProvider value = {user}>
                <StoreReviewProvider value={storeReview}>
                    <SystemBuilderProvider value={systemBuild}>
                        <PostProvider value={post}>
                            <NavBar></NavBar>
                            <Routes>
                                <Route path="/Forum" element={<Forum></Forum>}></Route>
                                <Route path="/PostCreate" element={<PostCreate></PostCreate>}></Route>
                                <Route path="/StoreReview" element={<StoreReview></StoreReview>}></Route>
                                <Route path="/StoreReviewView" element={<StoreReviewView></StoreReviewView>}></Route>
                                <Route path="/StoreReviewPost" element={<StoreReviewPost></StoreReviewPost>}></Route>
                                <Route path="/SystemBuilder" element={<SystemBuilder></SystemBuilder>}></Route>
                                <Route path="/" element={<Home></Home>}></Route>
                                <Route path="/Register" element={<Register></Register>}></Route>
                                <Route path="/UserProfile" element={<UserProfile></UserProfile>}></Route>
                            </Routes>
                            <footer>
                                    <div className="contact-container">
                                        <span className="contact-us">Contact us</span>
                                        <div className="socials">
                                            <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"></a>
                                            <a className="twitter" href="https://twitter.com/" target="_blank" rel="noreferrer"></a>
                                            <a className="instagram" href="https://instagram.com/" target="_blank" rel="noreferrer"></a>
                                        </div>
                                    </div>
                            </footer>
                        </PostProvider>
                    </SystemBuilderProvider>
                </StoreReviewProvider>
            </UserProvider>
        </Router>
    )
}

export default App;