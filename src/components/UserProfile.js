import React, { useContext, useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProfile =()=>{
    const user = useContext(UserContext);

    const [editOpen, setEditOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [saveOpen, setSaveOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(user.profilePic);
    const [bio,setBio] = useState(user.bio);

    const navigate = useNavigate();

    const back=()=>{
        navigate(-1);
    }

    function sendChanges(){
        user.setProfilePic(profilePic);
        user.setBio(bio);
        setEditOpen(false);
        setSaveOpen(true);
    }

    function discardChanges(){
        setProfilePic(user.profilePic);
        setBio(user.bio);
        setModalOpen(false);
        setEditOpen(false);
    }

    const saved={
        true:(
            <span className='user-profile-saved'>Saved!</span>
        )
    }

    console.log("profile pic is==" + profilePic);

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
                            <input type={'file'} accept={'image/*'} id='file-upload' onChange={(e)=>setProfilePic(e.target.value)}></input>
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