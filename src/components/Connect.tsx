import "./Connect.css";
import male1 from "../assets/male1.png";
import male2 from "../assets/male2.png";
import female from "../assets/female.png";

export default function Connect() {
  return (
    <main className="connect">
      <div className="images">
        <div className="images-two">
          <img src={female} alt="male picture" />
          <img src={male1} alt="femalemale picture" />
        </div>
        <div className="images-one">
          <img src={male2} alt="a man picture" />
        </div>
      </div>

      <div className="connect-content">
        <h1>Write, read and connect with great minds on chatter</h1>
        <p>
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals{" "}
        </p>
        <button>Get Started</button>
      </div>
    </main>
  );
}
