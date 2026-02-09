import { useState, useMemo } from "react"

const calculation = (num) => {
    console.log("calling calculate 📞")
    for(let i = 0; i < 100_000_000; i++){
        num += 1
    }
    return num
}

const ExampleUseMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const result = useMemo(() => calculation(count), [count])

    const incremenet = () => {
        setCount(count + 1)
    }

    const handleTodo = () => {
        setTodos(prev => [...prev, "ngoding"])
    }

    return (
        <>
            <div>result count : {count}</div>
            <button onClick={() => incremenet()}>klik</button>
            <div>Calculation : {result}</div>
            <hr />
            <button onClick={() => handleTodo()}>klik</button>
            <h2>todos: 
                {todos.map((item, index) => {
                    return <span key={index}>{item}</span>
                })}
            </h2>
        </>
    )
}

export default ExampleUseMemo