import React,{createContext,useState} from 'react';
  
//create contexts 
 export const CounterCtx = createContext(0); 

//create contexts provider 
 const CounterContextProvider=({children})=>{
    const [count,setCounter] = useState(0);
    const increaseCounter=()=>setCounter(count+1);
    const decreaseCounter=()=>setCounter(count-1);
   const  value={count,increaseCounter,decreaseCounter};
    return (<CounterCtx.Provider value={value}>
        {children}
    </CounterCtx.Provider>
    );
}

export default CounterContextProvider;