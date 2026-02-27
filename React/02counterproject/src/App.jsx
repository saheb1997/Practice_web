import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] =useState(15)
  console.log(useState(15));
  
  // let counter = 15
  // Use prev because React state updates are asynchronous and batched.
  const addValue = ()=>{
    if(counter<20){
      setCounter(prev=>prev+1)
      setCounter(prev=>prev+1)
      setCounter(prev=>prev+1)
      setCounter(prev=>prev+1)
    }
      
  }

  const removeValue =()=>{
    if(counter>0)
      setCounter(counter-1)
  }
  return (
    <>
     <h1>chai aur react{counter}</h1>
     <h2>Counter value:{counter}</h2>
     <button
     onClick={addValue}
     
     >Add value{counter}</button>
     <br />
     <button
     onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
