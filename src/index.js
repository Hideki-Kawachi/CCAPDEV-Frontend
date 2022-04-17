import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Forum from "./components/Forum";
import Post from "./components/Post";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import index from './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
            <NavBar></NavBar>
            <Routes>
                <Route path="/Forum" element={<Forum></Forum>}></Route>
                <Route path="/Post" element={<Post></Post>}></Route>
                <Route path="/Home" element={<Home></Home>}></Route>
                <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
                <Route path="/Register" element={<Register></Register>}></Route>
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
        );

reportWebVitals();
