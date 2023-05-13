import Square from "./Square";

type WordProps = {
  word: string;
  handleClick: any;
};

const Word: React.FunctionComponent<WordProps> = ({ word, handleClick }) => {
  return (
    <section className="word-section">
      {word
        .toString()
        .split("")
        .map((letter, index) => (
          <Square key={index} value={letter} handleClick={handleClick}></Square>
        ))}
    </section>
  );
};

export default Word;
