import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/Counter"

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button aria-label="increment value" onClick={() => dispatch(increment())}>increment</button>
      </div>
      <div>
        <button aria-label="decrement value" onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      <span>{count}</span>
    </div>
  )
}

export default App