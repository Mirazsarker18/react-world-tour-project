import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-4xl'>React world tour project</h1>
     <Countries></Countries>
      
    </>
  )
}

export default App
