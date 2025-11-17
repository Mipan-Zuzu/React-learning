import InputCard from "../Elements/Input/index"
import Button from "../Elements/Button/index"
import { useEffect, useRef, useState } from "react"
import {login} from "../../services/auth.services"

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const HandleLogin = (e) => {
    e.preventDefault()
    // localStorage.setItem('Email',e.target.email.value)
    // localStorage.setItem('Number',e.target.number.value)
    
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    login(data, (status,res) => {
      if(status) {
        localStorage.setItem("token", res)
        window.location.href = '/product'
        console.log(res)
      }else {
        setLoginFailed(res.response.data)
      }
    })
  }

   const UsernameRef = useRef(null)

   useEffect(() => {
    UsernameRef.current.focus()
   }, [])

    return (
      <>
          <form onSubmit={HandleLogin}>
          {loginFailed && <p className="text-red-500">{loginFailed}</p>}
          <InputCard
            placeholder="Jhon Doe"
            type="text"
            name="username"
            label="Username"
            ref={UsernameRef}
          />
          <InputCard
            placeholder="password"
            type="password"
            name="password"
            label="Password "
          />
          <div className="gap-5 flex">
            <Button variant="bg-black p-3 hover:bg-white hover:text-black border border-black duration-300" type="submit" OnClic={HandleLogin} >Login</Button>
          </div>
        </form>
        </>
    )
} 

export default FormLogin