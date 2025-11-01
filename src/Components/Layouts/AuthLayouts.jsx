import {Link} from "react-router-dom"

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="min-h-screen flex justify-self-center items-center text-black">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-mono">{title}</h1>
        <p className="font-mono font-light mb-8">
          Welcome, Please input data valid
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

export const Navigation = ({type}) => {
  if(type === 'login') {
    return (
       <p className="mt-3 flex gap-2">
          Don't have any account
          <Link to={'/register'} className="text-blue-500 border-b-2 ">
              sign up
          </Link>
        </p>
    )
  }else if (type === 'register') {
    return (
       <p className="mt-3 flex gap-2">
          Have an account
          <Link to={'/login'} className="text-blue-500 border-b-2 ">
              login
          </Link>
        </p>
    )
  }
}

export default AuthLayouts;
