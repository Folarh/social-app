//styles
import Tabs from "../../components/Tabs";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup-left">
        <h1>CHATTER</h1>
        <p>
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
      </div>
      <div className="tabs">
        <Tabs />
      </div>
    </div>
  );
}
