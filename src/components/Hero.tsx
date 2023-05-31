//styles
import "./Hero.css";
// import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <main className="hero">
      {/* <img src={hero} />  */}
      <div className="hero-content">
        <h1>
          Welcome to Chatter: A Haven for Text-
          <br />
          Based Content
        </h1>

        <p>
          Unleash the Power of Words, Connect with like-minded Readers
          <br /> and Writers
        </p>

        <button className="cta">Get Started</button>
      </div>
    </main>
  );
}
