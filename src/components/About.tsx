import "./Aboout.css";

export default function About() {
  return (
    <main className="about">
      <div className="about-chatter">
        <h1>About chatter</h1>
        <p>
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </p>
      </div>
      <div className="chatter-image">{/* <img src={about} /> */}</div>
    </main>
  );
}
