import bomb from "../assets/bomb-svgrepo-com.svg";
import explosion from "../assets/explosion-svgrepo-com.svg";

type BombProps = {
  /* squares: any[]; */
  attempts: number;
  refreshPage: () => void;
};

const Bomb: React.FunctionComponent<BombProps> = ({
  attempts,
  refreshPage,
}) => {
  if (attempts == 0) {
    return (
      <section className="bomb-section">
        <p>The bomb exploded</p>
        <img className="bomb" src={explosion} alt="" />
        <button onClick={refreshPage}>Try again</button>
      </section>
    );
  } else {
    return (
      <section className="bomb-section">
        <p>
          You have to guess the word to disarm the bomb in:{" "}
          <span className="accent">{attempts}</span> attempts
        </p>
        <img className="bomb" src={bomb} alt="" />
      </section>
    );
  }
};

export default Bomb;
