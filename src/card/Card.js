import { useState } from "react";
const Card = (props) => {
  console.log(props);
  const { title, description } = props.data;
  const [colors] = useState(["#eb4934", "#5e5c0d", "#30b828", "#163bcc"]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * (colors.length - 1 - 0) + 0);
    return colors[randomIndex];
  };

  return (
    <div className="cardlist" style={{ backgroundColor: getRandomColor() }}>
      <div>
        <h1 style={{ textTransform: "uppercase" }}>{title}</h1>
        <p>{description}</p>
        <button
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Start-Quizz
        </button>
      </div>
    </div>
  );
};
export default Card;
