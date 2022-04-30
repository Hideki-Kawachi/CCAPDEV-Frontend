import React, { useState } from 'react';

function SystemBuilder() {
    const [cpu, setCpu] = useState("");
    const [cpuCooler, setCpuCooler] = useState("");
    const [motherboard, setMotherboard] = useState("");
    const [ram, setRam] = useState("");
    const [storage, setStorage] = useState("");
    const [gpu, setGpu] = useState("");
    const [pcCase, setPcCase] = useState("");
    const [powerSupply, setPowerSupply] = useState("");



    return (  
        <div className='content-system-builder'>
            <span className='system-builder-title'>SYSTEM BUILDER</span>
            <div className='system-builder-body'>
                <div className='system-builder-left-container'>
                    <span>Choose a CPU:</span>
                    <select name='cpu' className='system-builder-cpu-list'>
                        <option value={'hello'}>hello</option>
                    </select>
                </div>

                <div className='system-builder-right-container'>
                    <span>right</span>
                </div>
            </div>
            
        </div>
    );
}

export default SystemBuilder;