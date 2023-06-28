interface CardProps {
  icon: React.ReactNode;
  header: string;
  info: string;
}

const Card: React.FC<CardProps> = ({ icon, header, info }) => {
  return (
    <div className="card">
      {/* <img src={icon} /> */}
      <span>{icon}</span>
      <h2>{header}</h2>
      <p>{info}</p>
    </div>
  );
};

export default Card;
