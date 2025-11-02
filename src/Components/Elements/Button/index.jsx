import React from "react"

 const Button = (props) => {
  const {variant , children = "dsdas", color = "text-white"} = props
  return <button className={`p-3 font-mono ${color} text-sm rounded-lg ${variant}`}>{children}</button>
}

export default Button