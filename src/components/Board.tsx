import Square from "./Square";

type BoardProps = {
  handleClick: any;
  squares: any[];
};

const Board: React.FunctionComponent<BoardProps> = ({
  squares,
  handleClick,
}) => {
  return (
    <div className="board">
      <Square squares={squares} handleClick={handleClick} value={0}></Square>
      <Square squares={squares} handleClick={handleClick} value={1}></Square>
      <Square squares={squares} handleClick={handleClick} value={2}></Square>
      <Square squares={squares} handleClick={handleClick} value={3}></Square>
      <Square squares={squares} handleClick={handleClick} value={4}></Square>
      <Square squares={squares} handleClick={handleClick} value={5}></Square>
      <Square squares={squares} handleClick={handleClick} value={6}></Square>
      <Square squares={squares} handleClick={handleClick} value={7}></Square>
      <Square squares={squares} handleClick={handleClick} value={8}></Square>
    </div>
  );
};

export default Board;
