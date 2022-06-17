import React, { useEffect, useContext, useState } from 'react';
import UserContext from './context/UserContext';
import UserBuildsBar from './UserBuildsBar';

function UserBuilds() {
    let tempList = [];
    const user=useContext(UserContext);

    const [buildList, setBuildList] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(()=>{
        fetch("/PUserBuilds",{
            method : "GET",
            headers: {
                username: user.username
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data=="none found" || data== "error" || data==null){
                setIsEmpty(true);
                console.log("empty");
            }
            else{
                data.userBuilds.forEach((currentBuild, index) => {
                    tempList.push(<UserBuildsBar key={index} build={currentBuild.build} date={currentBuild.date} cpu={currentBuild.cpu} cpuCooler={currentBuild.cpuCooler} motherboard={currentBuild.motherboard} ram={currentBuild.ram} storage={currentBuild.storage} gpu={currentBuild.gpu} pcCase={currentBuild.pcCase} powerSupply={currentBuild.powerSupply} total={currentBuild.total}></UserBuildsBar>)
                });
                setBuildList(tempList);
                setIsEmpty(false);
                //console.log(data.userBuilds);
            }
        })
    },[user.userBuilds])

    const showEmpty={
        true: (
            <>
            <span className='user-builds-error'>You do not have any builds!</span>
            </>
        )
    }

    return ( 
        <div className='content-user-builds'>
            <div className='user-builds-header'>
                    <span className='user-builds-title'>MY BUILDS</span>
            </div>
            <div className='user-builds-container'>
                {showEmpty[isEmpty]}
                {buildList}
            </div>
        </div>
     );
}

export default UserBuilds;