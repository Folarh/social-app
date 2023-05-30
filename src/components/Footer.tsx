//styles
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="logo">Chatter</h1>
      <div className="foot-info">
        <div className="explore">
          <h1>Explore</h1>
          <ul>
            <li>Community</li>
            <li>Trending blogs</li>
            <li>Chatter for teams</li>
          </ul>
        </div>
        <div className="explore">
          <h1>Support</h1>
          <ul>
            <li>Support docs</li>
            <li>Join slack</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="explore">
          <h1>Official blog</h1>
          <ul>
            <li>Official blog</li>
            <li>Engineering blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
