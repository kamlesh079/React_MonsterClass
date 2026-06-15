const ComponentTwo = ({ count, onClickHandler }) => {
  // const handleClick = () => onClickHandler();

  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>decrement</button>
    </div>
  );
};

export default ComponentTwo;
