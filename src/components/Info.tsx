//styles
import "./Info.css";
//images
import profile from "../assets/malepic.png";

export default function Info() {
  return (
    <main className="info">
      <div className="info-image">
        <img src={profile} />
      </div>
      <div className="info-content">
        <p className="main-para">
          "Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I have discovered a vibrant
          community of individuals who are passionate about sharing their ideas
          and engaging in thoughtful discussions.”
        </p>
        <p className="name-para">
          <span>Adebobola Muhydeen,</span> Software developer at Apple.
        </p>
        <button className="join">Join chatter</button>
      </div>
    </main>
  );
}
