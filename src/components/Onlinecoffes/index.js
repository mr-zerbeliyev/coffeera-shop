import "./style.css";

const OnlineCoffes = ({ img, name, price }) => {
  return (
    <div className="online_coffes">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
    </div>
  );
};

export default OnlineCoffes;
