import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {  
    const { userAuth } = useAuthContext();

    useEffect(() => {
        if (!userAuth) {
            return <Navigate to="/login" replace />;
        }
    }, [userAuth]);

    return userAuth ? children : null;
}

export default ProtectedRoute;