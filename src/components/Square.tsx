type SquareProps = {
  index?: number;
  handleClick?: any;
  value: string;
  status: any;
  type: string;
};

const Square: React.FunctionComponent<SquareProps> = ({
  index,
  handleClick,
  value,
  status,
  type,
}) => {
  return (
    <div
      className={
        status == "Right"
          ? `square right ${type}`
          : status == "Wrong"
          ? `square wrong ${type}`
          : `square ${type}`
      }
      onClick={() => handleClick(index)}
    >
      {value}
    </div>
  );
};

export default Square;
