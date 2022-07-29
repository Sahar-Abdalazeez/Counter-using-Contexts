import React from 'react';
import './App.css';
import CompA from './components/CompA';
import Counter from './components/Counter';
import CounterContextProvider from './contexts/counterContext'
function App() {

  return (
    <div className="App">
      <CounterContextProvider>
     <Counter />
     </CounterContextProvider>
    </div>
  );
}

export default App;
