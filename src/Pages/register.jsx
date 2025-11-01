import AuthLayouts from "../Components/Layouts/AuthLayouts"
import FormRegister from "../Components/Fragments/FormRegister"
import {Link} from "react-router-dom"

const RegisterPage = () => {
    return (
        <AuthLayouts title = "Sign Up">
            <FormRegister />
            <p className="mt-5 ">
                have an account <span className="text-blue-400 border-b-2"><Link to={"/login"}>Sign</Link></span>
            </p>
        </AuthLayouts>
    )
}

export default RegisterPage