import React from 'react'
import { useContext } from 'react'
import { ContextItems } from '../context/Context'

const Items = () => {
    const {items} = useContext(ContextItems)
  return (
    <div>
      <span>barang yg ada di troli kamu : 
        {items.map((items, index) => {
          return <div key={index}>
            <ul>
              <li>{items}</li>
            </ul>
          </div>
        })}
      </span>
    </div>  
  )
}

export default Items
