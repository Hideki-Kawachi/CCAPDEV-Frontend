import React, { useContext, useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';

const UserProfile =()=>{
    const user = useContext(UserContext);

    const [editOpen, setEditOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [saveOpen, setSaveOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(user.profilePic);      //FRONT END ONLY
    const [bio,setBio] = useState(user.bio);

    const [form,setForm] = useState(new FormData());

    const navigate = useNavigate();

    const back=()=>{
        navigate(-1);
    }

    function sendChanges(){
        if(bio != user.bio){
            fetch('/PUpdateBio', {
                method: 'POST',
                body: JSON.stringify({
                    username: user.username,
                    bio: bio
                }),
                headers: {
                    'Content-Type': "application/json" 
                }
            }).then(res => {
                return res.json();
            })
            .then (data => { 
                //console.log("bio update result is:" + data);
                //console.log("UPDATE BIO");
                user.setBio(bio);
            })
            .catch( (error)=>
                console.log(error)
            );
        }
        
        if(profilePic != user.profilePic){
            //update prof pic in DB
            fetch("https://pcguro-backend.herokuapp.com/PImage", {
                method: "POST",
                body: form,
                headers: {
                    username : user.username
                }
            }).then(res=>res.json())
            .then(data=>{
                //console.log("data from pimage:" + data);
                //console.log("UPDATE IMAGE");
                let url = URL.createObjectURL(form.get("image"));
                user.setProfilePic(url);
                setProfilePic(url);
            })
            .catch( (error)=>
                console.log(error)
            );
        }

        
        setEditOpen(false);
        setSaveOpen(true);
    }

    useEffect(()=>{
        if(!profilePic.startsWith("data") && !user.profilePic.startsWith("data") && user.username.length>0){
            //console.log("username here:" + user.username);
            fetch("https://pcguro-backend.herokuapp.com/PProfPicGet", {
                method: "GET",
                headers: {
                    username: user.username
                }
            }).then(res=>res.json())
            .then(data=>{
                //console.log("GET IMAGE");
                const num1 = data.data.data;
                let encoded = Buffer.from(num1, 'utf8').toString('base64');
                setProfilePic('data:image/jpeg;base64,' + encoded);
                user.setProfilePic('data:image/jpeg;base64,' + encoded);
                //console.log("saving");
            })
        }
    },[user.username])

            


    function discardChanges(){
        setProfilePic(user.profilePic);
        setBio(user.bio);
        setModalOpen(false);
        setEditOpen(false);
        setSaveOpen(false);
    }

    function picChange(e){
        
        form.delete("image");
        form.delete("name");
        form.append("image", e.target.files[0]);
        form.append("name", e.target.files[0].name);
        let url = URL.createObjectURL(e.target.files[0]);
        setProfilePic(url);
    }


    const saved={
        true:(
            <span className='user-profile-saved'>Saved!</span>
        )
    }

    useEffect(()=>{
        setBio(user.bio);
        setProfilePic(user.profilePic);
    },[user])

    if(editOpen){
        if(modalOpen){
            return(
                <div className='content-user-profile'>
                    <div className='user-profile-modal-container'>
                        <div className='modal' id='user-profile-modal'>
                            <button className='exit-button' onClick={discardChanges}></button>
                            <span className='user-profile-modal-text'>Discard Changes?</span>
                            <div className='user-profile-modal-button-container'>
                                <button className='user-profile-modal-button' id='discard' onClick={discardChanges}>Discard</button>
                                <button className='user-profile-modal-button' onClick={()=>setModalOpen(false)}>Go Back</button>
                            </div>
                        </div>
                    </div>
                    <div className='user-profile-container'>
                    <button className='back-button' onClick={()=>setEditOpen(false)}></button>
                        <div className='user-profile-pic-container'>   
                            <img src={profilePic} id='user-profile-pic'></img> 
                        </div>
                        <span className='user-profile-username'>{user.username}</span>
                        <span style={{position: 'absolute', left: '25px', top: '145px'}}>About me: </span>
                        <textarea type={'text'} className='user-profile-bio-input' value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                        <button className='user-profile-submit' type={'button'} onClick={()=>sendChanges()}>Save Changes</button>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className='content-user-profile'>
                    <div className='user-profile-container'>
                    <span className='user-profile-header'>Editing Profile</span>
                    <button className='back-button' onClick={()=>setModalOpen(true)}></button>
                        <div className='user-profile-pic-container'>   
                            <img src={profilePic} id='user-profile-pic'></img>
                            <input type={'file'} accept={'image/*'} id='file-upload' onChange={(e)=>picChange(e)}></input>
                        </div>
                        <span className='user-profile-username'>{user.username}</span>
                        <span style={{position: 'absolute', left: '25px', top: '145px'}}>About me: </span>
                        <textarea type={'text'} className='user-profile-bio-input' value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                        <button className='user-profile-submit' type={'button'} onClick={()=>sendChanges()}>Save Changes</button>
                    </div>
                </div>
            );
        }
    }
    else{
        return(
            <div className='content-user-profile'>
                <div className='user-profile-container'>
                <button className='back-button' onClick={back}></button>
                    <div className='user-profile-pic-container'>   
                        <img src={user.profilePic} id='user-profile-pic'></img> 
                    </div>
                    <span className='user-profile-username'>{user.username}</span>
                    <span style={{position: 'absolute', left: '25px', top: '145px'}}>About me: </span>
                    <span className='edit-button' onClick={()=>setEditOpen(true)}></span>
                    <div className='user-profile-bio-container'>
                        <span className='user-profile-bio'>{user.bio}</span>
                    </div>
                    {saved[saveOpen]}
                </div>
            </div>
        );
    }
}

export default UserProfile;