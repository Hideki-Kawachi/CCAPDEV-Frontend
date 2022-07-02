import React, { useContext,useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import SystemBuilderContext from './context/SystemBuilderContext';

function SystemBuilder() {
    const user = useContext(UserContext);
    let currentBuild = [];

    const navigate = useNavigate();

    const [build,setBuild] = useState("");
    const [username, setUsername] = useState(user.username);
    const [date, setDate] = useState(new Date());

    const [cpu, setCpu] = useState("default---0");
    const [cpuCooler, setCpuCooler] = useState("default---0");
    const [motherboard, setMotherboard] = useState("default---0");
    const [ram, setRam] = useState("default---0");
    const [storage, setStorage] = useState("default---0");
    const [gpu, setGpu] = useState("default---0");
    const [pcCase, setPcCase] = useState("default---0");
    const [powerSupply, setPowerSupply] = useState("default---0");
    const [total, setTotal] = useState(0);

    const [cpuList, setCpuList] = useState([]);
    const [cpuCoolerList, setCpuCoolerList] = useState([]);
    const [motherboardList, setMotherboardList] = useState([]);
    const [ramList, setRamList] = useState([]);
    const [storageList, setStorageList] = useState([]);
    const [gpuList, setGpuList] = useState([]);
    const [pcCaseList, setPcCaseList] = useState([]);
    const [powerSupplyList, setPowerSupplyList] = useState([]);


    const XLSX = require('xlsx');

    useEffect(()=>{
        fetch("SystemBuilderList.xlsx").then(res => res.arrayBuffer())
        .then(ab => {
            const workbook = XLSX.read(ab, { type: "array"});
            setCpuList(getData(workbook,"cpu"));
            setCpuCoolerList(getData(workbook,"cpuCooler"));
            setMotherboardList(getData(workbook,"motherboard"));
            setRamList(getData(workbook,"ram"));
            setStorageList(getData(workbook,"storage"));
            setGpuList(getData(workbook,"gpu"));
            setPcCaseList(getData(workbook,"pcCase"));
            setPowerSupplyList(getData(workbook,"powerSupply"));
        });
    },[])

    function getData(workbook, sheetName){
        let worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }

    useEffect(()=>{
        let temp = 0;
        temp += getPartPrice(cpu);
        temp += getPartPrice(cpuCooler);
        temp += getPartPrice(motherboard);
        temp += getPartPrice(ram);
        temp += getPartPrice(storage);
        temp += getPartPrice(gpu);
        temp += getPartPrice(pcCase);
        temp += getPartPrice(powerSupply);
        setTotal(temp);
    },[cpu,cpuCooler,motherboard,ram,storage,gpu,pcCase,powerSupply]);

    function getPartPrice(value){
        let temp = value.split("---");
        return parseFloat(temp[1]);
    }

    function sendPost(){
        currentBuild = {build: build, date: date.toDateString().substring(4), cpu: cpu,cpuCooler: cpuCooler,motherboard: motherboard,ram: ram,storage: storage,gpu: gpu,pcCase: pcCase,powerSupply: powerSupply, total: total};
        fetch("https://pcguro-backend.herokuapp.com/PSystemBuilder", {
            method: "POST",
            body: JSON.stringify(currentBuild),
            headers : {
                'Content-type' : 'application/json',
                'username' : username
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log("response from front is:" + data);
        })


        if(user.userBuilds.length==1 && user.userBuilds[0].cpu=="default---0"){
            user.setUserBuilds([currentBuild]);
        }
        else{
            user.setUserBuilds(oldBuild=>[currentBuild,...oldBuild]);
        }
        navigate("/");
    }


    function validatePost(){
        return(!((cpu,cpuCooler,motherboard,ram,storage,gpu,pcCase,powerSupply) === "default---0" || build.length==0));
    }

    return (  
        <div className='content-system-builder'>
            <span className='system-builder-header'>SYSTEM BUILDER</span>
            <div className='system-builder-build-container'>
                <span className='system-builder-build-text'>Build Name: </span>
                <input className='system-builder-build' type={'text'} value={build} onChange={(e)=>setBuild(e.target.value)}></input>
                <button className='system-builder-submit' disabled={!validatePost()} type={'button'} onClick={()=>sendPost()}>Post Build</button>
            </div>
            <div className='system-builder-build-sub-header'>
                        <span>posted by: </span>
                        <span className='system-builder-build-user'>{username}</span>
                        <span className='system-builder-build-date'>{date.toDateString().substring(4)}</span>
                    </div>
            <div className='system-builder-body'>
                <div className='system-builder-left-container'>
                    <span>Choose a CPU:</span>
                    <select name='cpu' className='system-builder-cpu-list' defaultValue={""} onChange={(e)=>setCpu(e.target.value)} >
                        <option hidden>CPU</option>
                        {cpuList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a CPU Cooler:</span>
                    <select name='cpuCooler' className='system-builder-cpu-cooler-list' defaultValue={""} onChange={(e)=>setCpuCooler(e.target.value)}>
                        <option hidden>CPU Cooler</option>
                        {cpuCoolerList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a Motherboard:</span>
                    <select name='motherboard' className='system-builder-motherboard-list' defaultValue={""} onChange={(e)=>setMotherboard(e.target.value)}>
                        <option hidden>Motherboard</option>
                        {motherboardList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a RAM:</span>
                    <select name='ram' className='system-builder-ram-list' defaultValue={""} onChange={(e)=>setRam(e.target.value)}>
                        <option hidden>RAM</option>
                        {ramList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a Storage:</span>
                    <select name='storage' className='system-builder-storage-list' defaultValue={""} onChange={(e)=>setStorage(e.target.value)}>
                        <option hidden>Storage</option>
                        {storageList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a GPU:</span>
                    <select name='gpu' className='system-builder-gpu-list' defaultValue={""} onChange={(e)=>setGpu(e.target.value)}>
                        <option hidden>GPU</option>
                        {gpuList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a PC Case:</span>
                    <select name='pcCase' className='system-builder-pc-case-list' defaultValue={""} onChange={(e)=>setPcCase(e.target.value)}>
                        <option hidden>PC Case</option>
                        {pcCaseList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                    <span>Choose a Power Supply:</span>
                    <select name='powerSupply' className='system-builder-power-supply-list' defaultValue={""} onChange={(e)=>setPowerSupply(e.target.value)}>
                        <option hidden>Power Supply</option>
                        {powerSupplyList.map((data)=>(
                            <option key={data.part} value={data.part + "---" + data.price}>{data.part}</option>
                        ))}
                    </select>
                </div>

                <div className='system-builder-right-container'>
                    <span className='system-builder-price-header'>PRICE</span>
                    <div className='system-builder-prices'>
                        <span>₱ {getPartPrice(cpu).toFixed(2)}</span>
                        <span>₱ {getPartPrice(cpuCooler).toFixed(2)}</span>
                        <span>₱ {getPartPrice(motherboard).toFixed(2)}</span>
                        <span>₱ {getPartPrice(ram).toFixed(2)}</span>
                        <span>₱ {getPartPrice(storage).toFixed(2)}</span>
                        <span>₱ {getPartPrice(gpu).toFixed(2)}</span>
                        <span>₱ {getPartPrice(pcCase).toFixed(2)}</span>
                        <span>₱ {getPartPrice(powerSupply).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <span className='system-builder-total'>Total: ₱ {total.toFixed(2)}</span>
        </div>
    );
}

export default SystemBuilder;