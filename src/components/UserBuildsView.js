import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';

function UserBuildsView() {

    const info = useLocation();
    const user = useContext(UserContext);
    const navigate = useNavigate();
    
    const build = info.state.build;
    const cpu = info.state.cpu.split("---");
    const cpuCooler = info.state.cpuCooler.split("---");
    const motherboard = info.state.motherboard.split("---");
    const ram = info.state.ram.split("---");
    const storage = info.state.storage.split("---");
    const gpu = info.state.gpu.split("---");
    const pcCase = info.state.pcCase.split("---");
    const powerSupply = info.state.powerSupply.split("---");
    const total = info.state.total;
    const date = info.state.date;
    //console.log("info here" + info);

    function back(){
        navigate("/UserBuilds");
    }

    function deleteBuild(){
        if(user.userBuilds.length>1){
            user.userBuilds.forEach((currentBuild, index)=>{
                if(currentBuild.build == build && currentBuild.date == date){
                    fetch("https://pcguro-backend.herokuapp.com/PUserBuildsDelete",{
                        method: "POST",
                        body: JSON.stringify(currentBuild),
                        headers: {
                            'Content-Type' : 'application/json',
                            username : user.username
                        }
                    }).then(res=>res.json())
                    .then(data=>{
                        console.log("data is:" + data);
                    })
                    user.userBuilds.pop(index);
                }
            });
        }
        else{
            user.userBuilds.forEach((currentBuild)=>{
                fetch("https://pcguro-backend.herokuapp.com/PUserBuildsDelete",{
                    method: "POST",
                    body: JSON.stringify(currentBuild),
                    headers: {
                        'Content-Type' : 'application/json',
                        username : user.username
                    }
                }).then(res=>res.json())
                .then(data=>{
                    console.log("data is:" + data);
                })
                currentBuild.cpu = "default---0";
                currentBuild.cpuCooler = "default---0";
                currentBuild.motherboard = "default---0";
                currentBuild.ram = "default---0";
                currentBuild.storage = "default---0";
                currentBuild.gpu = "default---0";
                currentBuild.pcCase = "default---0";
                currentBuild.powerSupply = "default---0";
                currentBuild.build = "";
                currentBuild.date = new Date();
                currentBuild.total = 0;
            });
        }
        navigate("/UserBuilds");
    }

    return ( 
        <div className='content-user-builds-view'>
            <button className='delete-button-user-builds-view' onClick={deleteBuild}>Delete</button>
            <div className='user-builds-view-container'>
                <div className='user-builds-view-header'>
                    <span className='user-builds-view-title'>Build: {info.state.build}</span>
                </div>
                <div className='user-builds-view-list'>
                    <div className='user-builds-view-list-left'>
                        <p>CPU: {cpu[0]}</p>
                        <p>CPU Cooler: {cpuCooler[0]}</p>
                        <p>Motherboard: {motherboard[0]}</p>
                        <p>RAM: {ram[0]}</p>
                        <p>Storage: {storage[0]}</p>
                        <p>GPU: {gpu[0]}</p>
                        <p>PC Case: {pcCase[0]}</p>
                        <p>Power Supply: {powerSupply[0]}</p>
                    </div>
                    <div className='user-builds-view-list-right'>
                        <p>₱ {cpu[1]}</p>
                        <p>₱ {cpuCooler[1]}</p>
                        <p>₱ {motherboard[1]}</p>
                        <p>₱ {ram[1]}</p>
                        <p>₱ {storage[1]}</p>
                        <p>₱ {gpu[1]}</p>
                        <p>₱ {pcCase[1]}</p>
                        <p>₱ {powerSupply[1]}</p>
                        <span className='user-builds-view-total'>Total: ₱ {info.state.total}</span>
                    </div>
                </div>
            </div>
            <button className='back-button-user-builds-view' onClick={back}></button>
        </div>
     );
}

export default UserBuildsView;