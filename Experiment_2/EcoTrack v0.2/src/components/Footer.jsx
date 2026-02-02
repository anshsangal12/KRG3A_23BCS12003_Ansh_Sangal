import { useAuthContext } from "../context/AuthContext";

const Footer = () => {  
    const { userAuth, setUserAuth } = useAuthContext();
    return (
        <div>
            {userAuth && (
                <button onClick={() => {
                    setUserAuth(false);
                }}>Logout</button>
            )}
        </div>
    );
}

export default Footer;