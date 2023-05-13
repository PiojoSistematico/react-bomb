import { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import Bomb from "./Bomb";
import Word from "./Word";
import getRandomInteger from "../helpers/getRandomInteger";

/* import wordList from "../wordsapi_sample.json"; */

const Game = () => {
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(100);

  const keyboard: string = "qwertyuiopasdfghjkl zxcvbnm";

  useEffect(() => {
    const wordLength: number = getRandomInteger(5, 10);
    setAttempts(Math.ceil(wordLength / 2));
    fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`)
      .then((res) => res.json())
      .then((data) => setWord(data));
  }, []);

  /* handle the click on a keyboard square */
  function handleClick(index: string): any {
    console.log(index);
    /* if the square has a X or O do nothing */
    /* if (squares[index]) return; */

    /* create a copy of squares to modify the new move */
    /* let newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares); */

    /* if the current move is a  */
    /* if (calculateWinner(newSquares)) return;
    setIsXNext(!isXNext); */
  }

  /* refresh page for a new game */
  /* function refreshPage() {
    window.location.reload();
  }*/

  /* const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); */

  /* calculate a winner from the current set of values of squares */
  /* const isThereAWinner = calculateWinner(squares); */

  /* if there is a winner change the h1 and add a new game button */
  /* let header;
  if (isThereAWinner) {
    header = (
      <>
        <p>
          The winner is{" "}
          <span className={isXNext ? "x-symbol" : "o-symbol"}>
            {isXNext ? "X" : "O"}
          </span>
        </p>
        <button onClick={() => refreshPage()}>New game</button>
      </>
    );
  } else { */
  /* if there is not a winner show the next move */
  /* header = (
      <p>
        Next player{" "}
        <span className={isXNext ? "x-symbol" : "o-symbol"}>
          {isXNext ? "X" : "O"}
        </span>
      </p>
    );
  } */

  return (
    <main>
      <Bomb attempts={attempts}></Bomb>
      <Word word={word} handleClick={handleClick}></Word>
      <Keyboard word={keyboard} handleClick={handleClick}></Keyboard>
    </main>
  );
};

export default Game;
