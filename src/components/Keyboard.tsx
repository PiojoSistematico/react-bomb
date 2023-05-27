import Square from "./Square";

type KeyboardProps = {
  word: string;
  handleClick: (index: number) => void;
  keyboardArray: any[];
  attempts: number;
};

const Keyboard: React.FunctionComponent<KeyboardProps> = ({
  word,
  handleClick,
  keyboardArray,
  attempts,
}) => {
  return (
    <section
      className={
        attempts > 0 ? "keyboard-section" : "keyboard-section disabled"
      }
    >
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
            type={""}
          ></Square>
        ))}
    </section>
  );
};

export default Keyboard;
