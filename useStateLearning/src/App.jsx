import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incrementCount(){
    setCount(count+1);
  }
  console.log("Rendering The Component");
  return (
    <>
      <h1> Increment The Counter </h1>
      <button onClick={incrementCount}>+</button>
      <h3> Counter Value {count} </h3>
    </>
  )
}

export default App
