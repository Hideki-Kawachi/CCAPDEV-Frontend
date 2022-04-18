import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Forum from "./components/Forum";
import Post from "./components/Post";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import index from './index.css'
import { useNavigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';

const App = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const loginChange=(isSuccessful, user)=>{       //April 18, 2021 - value of "user" is currently from Login.js and is the email state
        if(isLoggedIn && isSuccessful){     //is logged in and successfully logged out
            setIsLoggedIn(false);
            setUsername("");
        }
        else if(isSuccessful){              //is logged out and successfully logged in
            setIsLoggedIn(true);
            setUsername(user);
            setProfilePic(findProfPic(user));       //April 18, 2021 - profilePic state is not updating
            console.log(profilePic + "  wot");
        }
    }

    const findProfPic=(user)=>{
        let path = "./media/profilePictures/";
        path = path.concat(user);
        path = path.concat(".jpg");
        console.log("the file path is: " + path);
        return path;
    }

    useEffect(() =>{
        console.log("profile pic path is: "+ profilePic);
    },[profilePic])

    useEffect(() =>{
        console.log("Username is :" + username);
    },[username])

    return(
        <Router>
            <NavBar isLoggedIn={isLoggedIn} username={username} profPicPath={profilePic}></NavBar>
                <Routes>
                    <Route path="/Forum" element={<Forum></Forum>}></Route>
                    <Route path="/Post" element={<Post></Post>}></Route>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Login" element={<Login loginChange={loginChange}></Login>}></Route>
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
        </Router>
    )
}

export default App;