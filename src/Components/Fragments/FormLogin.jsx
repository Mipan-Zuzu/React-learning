import InputCard from "../Elements/Input/index"
import Button from "../Elements/Button/index"
import { useEffect, useRef } from "react"

const FormLogin = () => {

  const HandleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('Email',e.target.email.value)
    localStorage.setItem('Number',e.target.number.value)
    window.location.href = '/product'
  }

   const EmailRef = useRef(null)

   useEffect(() => {
    EmailRef.current.focus()
   }, [])

    return (
         <form onSubmit={HandleLogin}>
          <InputCard
            placeholder="Exxx@mail.com"
            type="email"
            name="email"
            label="Email"
            ref={EmailRef}
          />
          <InputCard
            placeholder="82 00000000"
            type="number"
            name="number"
            label="Phone Number"
          />
          <div className="gap-5 flex">
            <Button variant="bg-black p-3" type="submit" OnClic={HandleLogin} >Login</Button>
          </div>
        </form>
    )
} 

export default FormLogin