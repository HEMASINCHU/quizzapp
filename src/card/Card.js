const Card = (props) => {
  console.log(props);
  const { title, description } = props.data;
  return (
    <div className="cardlist">
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
