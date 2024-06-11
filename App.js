import React, {useState} from 'react';
import './App.css';
import ButtonPanel from './Components/ButtonPanel.js';
import Display from './Components/Display.js';

function App() {
  const [value,setValue] = useState(' ');
  
  function equals(e){
    let result;
    let clear=document.querySelector("#clear");
    let allButtons=document.querySelectorAll("input");
    
    try{
      result=''+eval(value);
      if(result==='undefined'){
        result='';
      }
      if(result==='Infinity' || result==='NaN'){
        allButtons.forEach(button=>{button.disabled=true});
        clear.disabled=false;
      }
    }
    catch{
      result='Invalid';
      allButtons.forEach(button=>{button.disabled=true});
      clear.disabled=false;
    }

    setValue(result);
  }

  function clearFunction(e){
    setValue('');
    let allButtons=document.querySelectorAll("input");
    allButtons.forEach(button=>{button.disabled=false});
  }

  return (
    <>
      <h1>My Calculator</h1>
      <div className="container">
        <div className='calculator'>
          <form action='#'>
            <Display value={value} />
            <ButtonPanel setValue={setValue} value={value} equals={equals} clearFunction={clearFunction} />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
