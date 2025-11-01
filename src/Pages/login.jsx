import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-3">
        Don't have any account{" "}
        <Link to={"/register"} className="text-blue-500 border-b-2 ">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
