import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(0)


  let addValue = () => {
    if(counter === 20) return 20
    setCounter(counter + 1)
    
  } 
  let removeValue = () => {
    if(counter === 0) return 0
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App