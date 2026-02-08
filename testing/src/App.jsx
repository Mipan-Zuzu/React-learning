import React, { useState } from 'react'
import './App.css'

const Child = React.memo(function Child({value}){
  console.log("render child")
  return <span>{value}</span>
})

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <Child value={"hello"} />
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)} >klik</button>
    </div>
  )
}

export default App
