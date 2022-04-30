import React, { createContext } from 'react';

const SystemBuilderContext = createContext({
    build: "", setBuild: ()=>({}),
    username: "", setUsername: ()=>({}),
    date: "", setDate: ()=>({}),
    cpu: "", setCpu: ()=>({}),
    cpuCooler: "", setCpuCooler: ()=>({}),
    motherboard: "", setMotherboard: ()=>({}),
    ram: "", setRam: ()=>({}),
    storage: "", setStorage: ()=>({}),
    gpu: "", setGpu: ()=>({}),
    pcCase: "", setPcCase: ()=>({}),
    powerSupply: "", setPowerSupply: ()=>({}),
    total: 0, setTotal: ()=>({}) 
    });

    export const SystemBuilderProvider = SystemBuilderContext.Provider;
    export const SystemBuilderConsumer = SystemBuilderContext.Consumer;

    export default SystemBuilderContext;