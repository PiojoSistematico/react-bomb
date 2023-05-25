import Square from "./Square";

type KeyboardProps = {
  word: string;
  handleClick: any;
  keyboardArray: any[];
};

const Keyboard: React.FunctionComponent<KeyboardProps> = ({
  word,
  handleClick,
  keyboardArray,
}) => {
  return (
    <section className="keyboard-section">
      {word
        .toString()
        .split("")
        .map((letter, index) => (
          <Square
            key={index}
            index={index}
            value={letter}
            status={keyboardArray[index]}
            handleClick={handleClick}
          ></Square>
        ))}
    </section>
  );
};

export default Keyboard;
