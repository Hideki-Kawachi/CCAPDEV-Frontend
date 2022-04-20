import React, { useContext, useEffect, useState } from 'react';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Forum from "./components/Forum";
import Post from "./components/Post";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import index from './index.css'
import UserProfile from './components/UserProfile';
import UserContext, { UserProvider } from './components/context/UserContext';

const App = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const user = {isLoggedIn,setIsLoggedIn,username,setUsername,profilePic,setProfilePic};

    useEffect(() =>{
        console.log("  user  " + username + "  logged  " + isLoggedIn + "  profile  " + profilePic);        //for checking
    })

    return(
        <Router>
            <UserProvider value = {user}>
                <NavBar></NavBar>
                    <Routes>
                        <Route path="/Forum" element={<Forum></Forum>}></Route>
                        <Route path="/Post" element={<Post></Post>}></Route>
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
            </UserProvider>
        </Router>
    )
}

export default App;