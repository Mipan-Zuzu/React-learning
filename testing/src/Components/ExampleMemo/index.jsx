import { memo, useState } from 'react'
import './App.css'

const HandleTodo = memo(function handleTodo({todos}) {
   console.log(todos)
  return (
    <>
    <h1>myTodo</h1>
      {todos.map((item, index) => {
       return <div key={index}>
          <span>here : {item}</span>
        </div>
      })}
    </>
  )
}, () => false)

const ExampleMemo = () => {
  const [todos, setTodos] = useState(['coding', 'makan'])
  const [count, setCount] = useState(0)

  const incremenet = () => {
    console.log("count")
    setCount((count) => count + 1)
  }

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo])
  }

  return (
    <div>
      <button onClick={() => addTodo("makan lagi")}>klik</button>
        <h1>Hello world</h1>
        <button onClick={() => incremenet()}>count</button>
      <span>{count}</span>
        <HandleTodo todos={todos} />
    </div>
  )
}

export default ExampleMemo
