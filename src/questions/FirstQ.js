const FirstQ = (props) => {
  console.log(props);
  const { question, options, correctAnswer } = props.data;

  return (
    <>
      <div>
        <h1>{question}</h1>
        <p>{options}</p>
        <p>{correctAnswer}</p>
      </div>
    </>
  );
};
export default FirstQ;
