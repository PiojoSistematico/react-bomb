import { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import Bomb from "./Bomb";
import Word from "./Word";
import getRandomInteger from "../helpers/getRandomInteger";

const Game = () => {
  const keyboard: string = "qwertyuiopasdfghjkl zxcvbnm";
  const wordLength: number = getRandomInteger(5, 8);
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(100);
  const [keyboardArray, setKeyboardArray] = useState(Array(27).fill(null));
  const [wordArray, setWordArray] = useState(Array(wordLength).fill(null));

  useEffect(() => {
    setAttempts(wordLength);
    /* fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`) */
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`)
      .then((res) => res.json())
      .then((data) => setWord(data));
  }, []);

  /* handle the click on a keyboard square */
  function handleClick(index: number): any {
    if (index == 19) return;

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
      if (attempts == 1) {
        for (let i = 0; i < newWordArray.length; i++) {
          if (newWordArray[i] == null) newWordArray[i] = "Wrong";
        }
      }
    }

    setKeyboardArray(newKeyboardArray);
    setWordArray(newWordArray);
  }

  /* refresh page for a new game */
  function refreshPage(): void {
    window.location.reload();
  }

  return (
    <main>
      <Bomb attempts={attempts} refreshPage={refreshPage}></Bomb>
      <Word word={word} wordArray={wordArray}></Word>
      <Keyboard
        word={keyboard}
        keyboardArray={keyboardArray}
        handleClick={handleClick}
        attempts={attempts}
      ></Keyboard>
    </main>
  );
};

export default Game;
