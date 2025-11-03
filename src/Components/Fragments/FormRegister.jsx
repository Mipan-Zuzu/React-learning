import InputCard from "../Elements/Input/index"
import Button from "../Elements/Button/index"

const FormRegister = () => {
    return (
         <form action="">
          <InputCard
            placeholder="Username"
            type="text"
            name="text"
            label="Username"
          />
          <InputCard
            placeholder="Exxx@mail.com"
            type="email"
            name="email"
            label="email"
          />
          <InputCard
            placeholder="82 00000000"
            type="number"
            name="number"
            label="Phone Number"
          />
          <div className="gap-5 flex">
            <Button variant="bg-black p-3">Create</Button>
          </div>
        </form>
    )
} 

export default FormRegister