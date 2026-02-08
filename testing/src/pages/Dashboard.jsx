import { useContext } from "react"
import Cart from "../Components/Cart"
import { ContextNames } from "../context/Context"

function Dashboard() {
    const {user} = useContext(ContextNames)
    console.log(user)
  return (
    <div>
      <span>Hi selamat datang : {user} </span>
      <Cart />
    </div>
  )
}

export default Dashboard
