import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Chatter</h2>
      </div>
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
    </nav>
  );
}
