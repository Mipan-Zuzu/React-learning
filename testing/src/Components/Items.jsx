import React from 'react'

const Items = React.memo(function Child({value}){
  console.log("render child")
  return <span>{value}</span>
})

export default Items
