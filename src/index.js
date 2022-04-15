import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();

//initialize event listeners for header buttons
document.getElementById('headerForum').addEventListener('click',buttonForum);
document.getElementById('headerCreatePost').addEventListener('click',buttonCreatePost);
document.getElementById('headerLogIn').addEventListener('click',buttonLogIn);
document.getElementById('headerRegister').addEventListener('click',buttonRegister);

function buttonForum(){
  console.log("Forum");
}

function buttonCreatePost(){
  console.log("Create Post");
}

function buttonLogIn(){
  root.render(<Login></Login>)
  console.log("Log in");
}

function buttonRegister(){
  console.log("Register");
}

reportWebVitals();
