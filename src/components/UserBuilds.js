import React, { useEffect, useContext, useState } from 'react';
import UserContext from './context/UserContext';
import UserBuildsBar from './UserBuildsBar';
import UserBuildsView from './UserBuildsView';

function UserBuilds() {
    let tempList = [];
    const user=useContext(UserContext);

    const [buildList, setBuildList] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(()=>{     //listing post to display
        console.log(user.userBuilds);

        if(user.userBuilds[0].cpu!=="default---0"){
            user.userBuilds.forEach((currentBuild, index)=>{
                tempList.push(<UserBuildsBar key={index} build={currentBuild.build} date={currentBuild.date} cpu={currentBuild.cpu} cpuCooler={currentBuild.cpuCooler} motherboard={currentBuild.motherboard} ram={currentBuild.ram} storage={currentBuild.storage} gpu={currentBuild.gpu} pcCase={currentBuild.pcCase} powerSupply={currentBuild.powerSupply} total={currentBuild.total}></UserBuildsBar>)
            });
            setBuildList(tempList);
            setIsEmpty(false);
        }
        else{
            setIsEmpty(true);
        }
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