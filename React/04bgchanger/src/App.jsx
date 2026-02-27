import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Load last saved color (or default to olive)
  const [color, setColor] = useState(() => {
    return localStorage.getItem("bgColor") || "olive";
  });

  // Save color whenever it changes
  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);


  return (
    <div
      className="w-full min-h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* create bottom bar */}
      <div className='fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center rounded-2xl px-2 py-2 gap-3 shadow-lg bg-white '>
          
          
          <button 
          className='outline-none px-9 py-1
          rounded-full text-white shadow-lg'  
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >
            Red
          </button>


          <button 
          className='outline-none px-9 py-1
          rounded-full text-white shadow-lg'  
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >
            green
          </button>


          <button 
          className='outline-none px-9 py-1
          rounded-full text-white shadow-lg'  
          style={{backgroundColor:"blue"}}
           onClick={()=>setColor("blue")}
          >
            blue
          </button>


          <button 
          className='outline-none px-9 py-1
          rounded-full text-white shadow-lg'  
          style={{backgroundColor:"black"}}
           onClick={()=>setColor("black")}
          >
            black
          </button>


          <button 
          className='outline-none px-9 py-1
          rounded-full text-white shadow-lg'  
          style={{backgroundColor:"Teal"}}
           onClick={()=>setColor("Teal")}
          >
            Teal
          </button>

          <button 
          className='outline-none px-9 py-1
          rounded-full text-white shadow-lg'  
          style={{backgroundColor:"Magenta"}}
           onClick={()=>setColor("Magenta")}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
