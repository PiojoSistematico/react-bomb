import bomb from "../assets/bomb-svgrepo-com.svg";

type BombProps = {
  /* handleClick: any;
  squares: any[]; */
  attempts: number;
};

const Bomb: React.FunctionComponent<BombProps> = ({ attempts }) => {
  return (
    <section className="bomb-section">
      <h1>
        You have to guess the word to disarm the bomb in {attempts} attempts
      </h1>
      <img className="bomb" src={bomb} alt="" />
    </section>
  );
};

export default Bomb;
