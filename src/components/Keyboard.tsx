import Square from "./Square";

type KeyboardProps = {
  word: string;
  handleClick: any;
};

const Keyboard: React.FunctionComponent<KeyboardProps> = ({
  word,
  handleClick,
}) => {
  return (
    <section className="keyboard-section">
      {word
        .toString()
        .split("")
        .map((letter, index) => (
          <Square key={index} value={letter} handleClick={handleClick}></Square>
        ))}
    </section>
  );
};

export default Keyboard;
