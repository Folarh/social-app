import "./Navbar.css";
import { useState } from "react";

//material icons
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

export default function Navbar() {
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Chatter</h2>
      </div>
      <div className="tg" id={toggle ? "navigation-mobile" : ""}>
        <div className="navigations">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="auth">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
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
}
