import { useRouteError  } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <center className="justify-center min-h-screen items-center flex flex-col">
            <h1 className="font-mono text-2xl font-bold">Sory something Went Wrong /:</h1>
            <p className="font-mono">Page <span className="bg-red-500 text-white">{error.statusText || error.message}</span></p>
        </center>
    )
}


export default ErrorPage