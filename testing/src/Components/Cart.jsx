import Items from "./Items"
import { useContext } from 'react'
import { ContextCart } from "../context/Context"

const Cart = () => {
    const {cart} = useContext(ContextCart)
  return (
    <div>   
        <span>jumlah troli belanja kamu : {cart}</span>
        <Items />
    </div>
  )
}

export default Cart
