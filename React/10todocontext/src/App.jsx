import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto 
        shadow-md  rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold
          text-center mb-8 mt-2">Mange Your Todos</h1>
          <div className="mb-4">

          </div>
          <div className="flex flex-wrap gap-y-3">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
