import HelloBlock from "../components/HelloBlock/HelloBlock";

import gameImg from "/game.png";

const HomePage = () => {
  return (
    <main>
      <HelloBlock />
      <img src={gameImg} />
    </main>
  );
};

export default HomePage;
