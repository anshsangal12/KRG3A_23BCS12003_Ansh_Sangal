import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ userAuth, setUserAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}