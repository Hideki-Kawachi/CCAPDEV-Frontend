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
import { UserProvider } from './components/context/UserContext';
import StoreReview from './components/StoreReview';
import StoreReviewView from './components/StoreReviewView';
import StoreReviewPost from './components/StoreReviewPost';
import { StoreReviewProvider } from './components/context/StoreReviewContext';
import SystemBuilder from './components/SystemBuilder';

const App = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState("/profilePictures/default.jpg");
    const user = {isLoggedIn,setIsLoggedIn,username,setUsername,profilePic,setProfilePic,email,setEmail};

    const [title,setTitle] = useState("");
    const [date,setDate] = useState(new Date());
    const [rating,setRating] = useState(0);
    const [description,setDescription] = useState("");
    const storeReview = {title,setTitle,username,setUsername,date,setDate,rating,setRating,description,setDescription};

    useEffect(() =>{
        console.log("  user:  " + username + "  logged in:  " + isLoggedIn + "  profile pic:  " + profilePic + "  email:  " + email);        //for checking
    })

    return(
        <Router>
            <UserProvider value = {user}>
                <StoreReviewProvider value={storeReview}>
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
                            <Route path="/UserProfile" element={<UserProfile username={username}></UserProfile>}></Route>
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
                </StoreReviewProvider>
            </UserProvider>
        </Router>
    )
}

export default App;