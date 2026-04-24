const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;