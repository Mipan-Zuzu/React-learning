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
            <Button variant="bg-black">Create</Button>
            <Button variant="bg-white border border-gray-600" color="text-black">Sigin</Button>
          </div>
        </form>
    )
} 

export default FormRegister