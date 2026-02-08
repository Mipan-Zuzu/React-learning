import {useReducer } from 'react'
import './App.css'
import { Type } from './postReducerType'
import { initial, handleReducer } from './postReducer'
import { useId } from 'react'

const App = () => {
  const [state, dispath] = useReducer(handleReducer, initial)
  const id = useId()

  const handleFetch = () => {
    dispath({ type : "starting"})
    fetch('https://dummyjson.com/todos')
    .then((res) => res.json())
    .then((data) => { 
      dispath({type : "fetch", payload : data.todos})
    })
    .catch(() => {
      dispath({type : "error"})
    })
  }
  return (
    <div>
        <label htmlFor={id}>Email</label>
        <input id={id}/>
      <button onClick={() => handleFetch()}>
         {state.loading ? "loading" : "klik"}
        </button>
        <span>{!state.data ? "" : state.data.map((item, index) => {
          return <div key={index}>
            <li>{item.todo}</li>
          </div>
        })}</span>
        <span>{state.error? "error king" : ''}</span>
    </div>
  )
}

export default App
