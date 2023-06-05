import { Link } from "react-router-dom";

//styles
import "./Navbar.css";
import { useState } from "react";

//material icons
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Chatter</h2>
      </div>
      <div className="tg" id={toggle ? "navigation-mobile" : ""}>
        <div className="navigations">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="auth">
          <button className="login-btn">
            <Link to="/login">Login</Link>
          </button>
          <button className="signup-btn">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>

      <div className="harmburger" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <ClearIcon className="clear" />
        ) : (
          <MenuIcon className="ham" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
