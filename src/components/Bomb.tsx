import bomb from "../assets/bomb-svgrepo-com.svg";
import explosion from "../assets/explosion-svgrepo-com.svg";

type BombProps = {
  attempts: number;
  refreshPage: () => void;
  wordArray: any[];
};

const Bomb: React.FunctionComponent<BombProps> = ({
  attempts,
  refreshPage,
  wordArray,
}) => {
  let isTheBombDisarmed: boolean = true;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == null || wordArray[i] == "Wrong")
      isTheBombDisarmed = false;
  }
  if (isTheBombDisarmed) {
    return (
      <section className="bomb-section">
        <div className="bomb-text">
          <p>You disarmed the bomb!!!!</p>
          <button className="new-game" onClick={refreshPage}>
            {" "}
            New Game
          </button>
        </div>

        <img className="bomb" src={bomb} alt="" />
      </section>
    );
  }
  if (attempts == 0) {
    return (
      <section className="bomb-section">
        <div className="bomb-text">
          <p>The bomb exploded</p>
          <button className="new-game" onClick={refreshPage}>
            {" "}
            Try again
          </button>
        </div>

        <img className="bomb" src={explosion} alt="" />
      </section>
    );
  } else {
    return (
      <section className="bomb-section">
        <div className="bomb-text">
          <p>You have to guess the word to disarm the bomb in: </p>
          <p>
            <span className="accent">{attempts}</span> attempts
          </p>
        </div>
        <img className="bomb" src={bomb} alt="" />
      </section>
    );
  }
};

export default Bomb;
