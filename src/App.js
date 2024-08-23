import InputFunc from './Components/InputFunc.js';
import InputClass from './Components/InputClass.js';
import Result from './Components/Result.js';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [currResult, setResult] = useState();
  
  function update(resVal, isError){
        console.debug("isError:");
        console.debug(isError);
      setResult(<Result resValue={resVal} isError={isError}/>);
  }

  return (
    <div className="App">
      <h1>Функционально:</h1>
      <InputFunc handleRes={update}/>
      <h1>Классово:</h1>
      <InputClass handleRes={update} />
      {currResult}
    </div>
  );
}

export default App;
