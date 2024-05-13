import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        console.log(loading);
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/sign_in"></Navigate>
};

export default PrivateRoute;