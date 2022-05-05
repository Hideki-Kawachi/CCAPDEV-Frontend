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
import PostContext, { PostProvider } from './components/context/PostContext';
import ForumPost from './components/ForumPost'
import ForumComment from './components/ForumComment'
import BuildGuidePost from './components/BuildGuidePost';
import UserBuilds from './components/UserBuilds';
import UserBuildsView from './components/UserBuildsView';
import BuildGuide2 from './components/BuildGuide2';
import BuildGuide3 from './components/BuildGuide3';


const App = () =>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState("/profilePictures/default.jpg");
    const [bio,setBio] = useState("This is the standard bio");
    const [userBuilds, setUserBuilds] = useState([{build: "", date: new Date, cpu: "default---0",cpuCooler: "default---0", motherboard: "default---0", ram: "default---0", storage: "default---0", gpu: "default---0", pcCase: "default---0", powerSupply: "default---0", total: 0}]);
    const user = {isLoggedIn,setIsLoggedIn,username,setUsername,profilePic,setProfilePic,email,setEmail,bio,setBio,userBuilds,setUserBuilds};

    const [reviewTitle,setReviewTitle] = useState("");
    const [reviewUsername,setReviewUsername] = useState("");
    const [reviewDate,setReviewDate] = useState(new Date());
    const [rating,setRating] = useState(0);
    const [reviewDescription,setReviewDescription] = useState("");
    const [reviewMedia,setReviewMedia] = useState("");
    const storeReview = {reviewTitle,setReviewTitle,reviewUsername,setReviewUsername,reviewDate,setReviewDate,rating,setRating,reviewDescription,setReviewDescription,reviewMedia,setReviewMedia};
    
    const [postComments,setPostComments] = useState([]);
    const [postUpvotes,setPostUpvotes] = useState(0);
    const [postTitle, setPostTitle] = useState("");
    const [postUsername, setPostUsername] = useState("");
    const [postDate, setPostDate] = useState(new Date());
    const [postDescription, setPostDescription] = useState("");
    const [postMedia, setPostMedia] = useState("");
    const [flair, setFlair] = useState("")
    const post = {postTitle,setPostTitle,flair,setFlair,postUsername,setPostUsername,postDate,setPostDate,postDescription,setPostDescription,postMedia,setPostMedia,postUpvotes,setPostUpvotes,postComments,setPostComments};

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
    const [buildDate, setBuildDate] = useState(new Date());
    const systemBuild = {build,setBuild,username,setUsername,buildDate,setBuildDate,cpu,setCpu,cpuCooler,setCpuCooler,motherboard,setMotherboard,ram,setRam,storage,setStorage,
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
                                <Route path="/UserBuilds" element={<UserBuilds></UserBuilds>}></Route>
                                <Route path="/UserBuildsView" element={<UserBuildsView></UserBuildsView>}></Route>
                                <Route path="/ForumPost" element={<ForumPost></ForumPost>}></Route>
                                <Route path="/ForumComment" element={<ForumComment></ForumComment>}></Route>
                                <Route path="/BuildGuidePost" element={<BuildGuidePost></BuildGuidePost>}></Route>
                                <Route path="/BuildGuide2" element={<BuildGuide2></BuildGuide2>}></Route>
                                <Route path="/BuildGuide3" element={<BuildGuide3></BuildGuide3>}></Route>
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