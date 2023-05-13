type SquareProps = {
  handleClick: any;
  value: string;
};

const Square: React.FunctionComponent<SquareProps> = ({
  handleClick,
  value,
}) => {
  return (
    <div className="square" onClick={() => handleClick(value)}>
      {value}
    </div>
  );
};

export default Square;
