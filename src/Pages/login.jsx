import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type={"login"}>
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
