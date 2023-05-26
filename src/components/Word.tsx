import Square from "./Square";

type WordProps = {
  word: string;
  wordArray: any[];
};

const Word: React.FunctionComponent<WordProps> = ({ word, wordArray }) => {
  return (
    <section className="word-section">
      {word
        .toString()
        .split("")
        .map((letter, index) => (
          <Square
            key={index}
            value={letter}
            status={wordArray[index]}
            type={"word-square"}
          ></Square>
        ))}
    </section>
  );
};

export default Word;
