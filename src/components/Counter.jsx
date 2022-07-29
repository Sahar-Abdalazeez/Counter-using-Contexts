import React from 'react';
import {CounterCtx} from '../contexts/counterContext';
function Counter() {
    return (
      <CounterCtx.Consumer>
        {(value)=>{
          return (
          <div>
          <h2>Counter</h2>
          <h3>the count value is {value?.count}</h3>

          <button onClick={()=>value?.increaseCounter()}>Increase</button>
          <button onClick={()=>value?.decreaseCounter()}>Decrease</button>
          </div>
            
            );
        }}
      </CounterCtx.Consumer>
    );
  }
  
  export default Counter;

 