import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setUserAuth } = useAuthContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Dummy login logic
        setUserAuth(true);
        navigate("/");
    }
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login to EcoTrack</button>
        </div>
    );
}