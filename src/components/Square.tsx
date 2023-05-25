type SquareProps = {
  index?: number;
  handleClick?: any;
  value: string;
  status: any;
};

const Square: React.FunctionComponent<SquareProps> = ({
  index,
  handleClick,
  value,
  status,
}) => {
  return (
    <div
      className={
        status == "Right"
          ? "square right"
          : status == "Wrong"
          ? "square wrong"
          : "square"
      }
      onClick={() => handleClick(index)}
    >
      {value}
    </div>
  );
};

export default Square;
