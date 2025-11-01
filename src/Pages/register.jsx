import AuthLayouts from "../Components/Layouts/AuthLayouts"
import FormRegister from "../Components/Fragments/FormRegister"
import {Link} from "react-router-dom"

const RegisterPage = () => {
    return (
        <AuthLayouts title = "Sign Up" type={"register"}>
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage