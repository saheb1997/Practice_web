import { useState,useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [copied, setCopied] = useState(false);
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharaAllowed]=useState(false)
  const  [password,setPassword]=useState("")
  const passwordRef = useRef(null)
  const passwordGenrator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()-_+={}[]`~"
    
    for (let i = 1; i  <=length; i++){
      let char= Math.floor (Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },
  [length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //for select a range of text
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
    setCopied(true);

    // reset color after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  },
  [password])
    useEffect(()=>{passwordGenrator()},
  [length,numberAllowed,charAllowed,passwordGenrator])
  // passwordGenrator()


  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md 
      rounded-lg px-4 py-10 my-8 text-orange-500 bg-gray-700 text-center'>
       <h1 className='text-white text-center'>password 
        generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>

          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black'
          placeholder='password' 
          readOnly
          ref={passwordRef}
          />
         <button
              onClick={copyPasswordToClipboard}
              className={`px-4 py-2 text-white font-semibold transition-all duration-200 ${
                copied
                  ? "bg-green-600 hover:bg-green-800"
                  : "bg-orange-500 hover:bg-orange-700"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
          </button>
        </div>
          <div className='flex text-sm gap-x-8'>
            <div className='flex item-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLenght(e.target.value)}}
               />
               <label > Length:{length}</label>
            </div>
            <div
            className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }} />
              <label >Numbers</label>
            </div>


            <div
            className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultValue={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharaAllowed((prev)=>!prev)
              }} />
              <label >character</label>
            </div>

          </div>
      </div>
    </>
  )
}

export default App
