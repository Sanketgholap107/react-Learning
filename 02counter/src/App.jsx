import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // let Counter = 5

  const addValue = () => {
    console.log("value added", counter);
    setCounter(++counter);
  }

  const removeValue = () => {
    setCounter(--counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
