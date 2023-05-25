import { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import Bomb from "./Bomb";
import Word from "./Word";
import getRandomInteger from "../helpers/getRandomInteger";

/* import wordList from "../wordsapi_sample.json"; */

const Game = () => {
  const keyboard: string = "qwertyuiopasdfghjkl zxcvbnm";
  const wordLength: number = getRandomInteger(5, 10);
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(100);
  const [keyboardArray, setKeyboardArray] = useState(Array(27).fill(null));
  const [wordArray, setWordArray] = useState(Array(wordLength).fill(null));

  useEffect(() => {
    setAttempts(Math.ceil(wordLength / 2));
    fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`)
      .then((res) => res.json())
      .then((data) => setWord(data));
  }, []);

  /* handle the click on a keyboard square */
  function handleClick(index: number): any {
    console.log(index);

    /* if the square has been selected do nothing */
    if (keyboardArray[index]) return;

    /* create a copy of the array to modify */
    let newKeyboardArray = keyboardArray.slice();
    let newWordArray = wordArray.slice();

    /* Check if the clicked letter is in the password */
    let letter = keyboard.charAt(index);
    if (word.toString().includes(letter)) {
      newKeyboardArray[index] = "Right";
      for (let i = 0; i < word.toString().length; i++) {
        if (word.toString().charAt(i) == letter) newWordArray[i] = "Right";
      }
    } else {
      newKeyboardArray[index] = "Wrong";
      setAttempts((current) => current - 1);
    }
    setKeyboardArray(newKeyboardArray);
    setWordArray(newWordArray);

    /* console.log(newKeyboardArray);
    console.log(newWordArray); */

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
      <Word word={word} wordArray={wordArray}></Word>
      <Keyboard
        word={keyboard}
        keyboardArray={keyboardArray}
        handleClick={handleClick}
      ></Keyboard>
    </main>
  );
};

export default Game;
