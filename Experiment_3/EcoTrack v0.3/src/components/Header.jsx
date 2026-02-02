import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">EcoTrack</h1>
      
      <nav className="nav">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/logs" className="nav-link">
          Logs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
