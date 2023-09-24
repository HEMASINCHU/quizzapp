import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const { title, description } = props.data;
  const [colors] = useState(["#00ffff", "#ff0080", "#bf00ff", "#80ff00"]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * (colors.length - 1 - 0) + 0);
    return colors[randomIndex];
  };

  return (
    <div
      className="cardlist"
      style={{ backgroundColor: getRandomColor(), maxWidth: "300px" }}
    >
      <div>
        <h1 style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
          {title}
        </h1>
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
          onClick={() => navigate("quizz-instruction")}
        >
          Start-Quizz
        </button>
      </div>
    </div>
  );
};
export default Card;
